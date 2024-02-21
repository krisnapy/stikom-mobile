import { AxiosRequestConfig } from "axios";

import { GeneralApiProblem } from "./helpers/api-problem.types";

export type RequestMethod = "get" | "post" | "put" | "patch" | "delete";

export type Payload = Record<string, any>;

export interface ApiParams {
  path: string;

  payloadWrapper?: string;

  payload?: Payload;

  config?: AxiosRequestConfig;
}

export interface ApiSuccessResult<Data = any> {
  ok: true;

  data: Data;
}

export type ApiError = {
  code: string;
  detail: { [key: string]: string[] };
  message: string;
};

export type ApiResult = ApiSuccessResult | GeneralApiProblem;
