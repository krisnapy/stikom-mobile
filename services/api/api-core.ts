import { ApiResponse, ApisauceInstance, create } from "apisauce";
import { snapshot } from "valtio";

import { camelizeKeys, snakeCaseKeys } from "services/api/helpers/object";
import { authStore } from "stores/auth-store";

import { ApiParams, RequestMethod } from "./api-core.types";
import { getGeneralApiProblem } from "./helpers/api-problem";
import { serialize } from "./helpers/serialize-formdata";

export class ApiCore {
  protected baseURL =
    process.env.API_BASE_URL ||
    "https://06cd-2001-448a-5065-3bd6-75df-9e98-df2-6624.ngrok-free.app/api/v1";
  protected api: ApisauceInstance;

  /**
   * Add a prefix to API path
   */
  protected pathPrefix = "";

  /**
   * Use multipart/form-data content type.
   * For file uploading
   */
  protected multipart = false;

  /**
   * Enable blob response type.
   * For file downloading
   */
  protected enableBlobResponse = false;

  /**
   * Convert request object key to snake case.
   */
  protected useSnakedKey = false;

  /**
   * Add a wrapper object around passed data.
   */
  protected payloadWrapper?: string;

  private addHeaderTransformer() {
    this.api.addRequestTransform((request) => {
      if (!request.headers) request.headers = {};

      const { token } = snapshot(authStore.state);

      if (token) {
        request.headers.Authorization = token;
      }

      if (this.multipart) {
        request.headers["Content-Type"] = "multipart/form-data";
      }
    });
  }

  private addResponseTypeTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.enableBlobResponse) {
        request.responseType = "blob";
      }
    });
  }

  private addRequestParamsTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.useSnakedKey) {
        request.params = snakeCaseKeys(request.params);
      }
    });
  }

  private addPayloadTransformer() {
    this.api.addRequestTransform((request) => {
      const data = this.payloadWrapper
        ? { [this.payloadWrapper]: request.data }
        : request.data;

      if (this.multipart) {
        request.data = serialize(data, {
          nullsAsUndefined: true,
          useSnakedKey: this.useSnakedKey,
        });
      } else {
        request.data = this.useSnakedKey ? snakeCaseKeys(data) : data;
      }
    });
  }

  private addResponseTransformer() {
    this.api.addResponseTransform((response) => {
      if (this.useSnakedKey) {
        response.data = camelizeKeys(response.data);
      }
    });
  }

  private getBaseURL() {
    return this.baseURL.replace(/\/$/, "");
  }

  constructor() {
    this.api = create({
      baseURL: this.getBaseURL(),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    this.addHeaderTransformer();
    this.addResponseTypeTransformer();
    this.addRequestParamsTransformer();
    this.addPayloadTransformer();
    this.addResponseTransformer();
  }

  private async processResult(response: ApiResponse<any>) {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return Promise.reject(problem);
    }

    return Promise.resolve(response);
  }

  private trimSlash(path: string): string {
    return path.replace(/\/{2,}/g, "/");
  }

  private createPath(path: string): string {
    return this.trimSlash(`/${this.pathPrefix}/${path}`);
  }

  protected async callApi(method: RequestMethod, { path, payload }: ApiParams) {
    const response: ApiResponse<any> = await this.api[method](
      this.createPath(path),
      payload,
      {
        baseURL: this.getBaseURL(),
      }
    );

    return await this.processResult(response);
  }

  protected async get(apiParams: ApiParams) {
    return await this.callApi("get", apiParams);
  }

  protected async post(apiParams: ApiParams) {
    return await this.callApi("post", apiParams);
  }

  protected async put(apiParams: ApiParams) {
    return await this.callApi("put", apiParams);
  }

  protected async patch(apiParams: ApiParams) {
    return await this.callApi("patch", apiParams);
  }

  protected async delete({ path, payload }: ApiParams) {
    return await this.processResult(
      await this.api.delete(
        this.createPath(path),
        {},
        { data: payload, baseURL: this.getBaseURL() }
      )
    );
  }
}
