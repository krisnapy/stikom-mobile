import { ApiResponse } from "apisauce";

import { ApiErrorKind, GeneralApiProblem } from "./api-problem.types";

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  response: ApiResponse<any>
): GeneralApiProblem | void | null {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: ApiErrorKind.CONNECTION, temporary: true };
    case "NETWORK_ERROR":
      return { kind: ApiErrorKind.CONNECTION, temporary: true };
    case "TIMEOUT_ERROR":
      return { kind: ApiErrorKind.TIMEOUT, temporary: true };
    case "SERVER_ERROR":
      return { kind: ApiErrorKind.SERVER, data: response.data?.errors };
    case "UNKNOWN_ERROR":
      switch (response.status) {
        case 302:
          return { kind: ApiErrorKind.FOUND, temporary: true };
        default:
          return { kind: ApiErrorKind.UNKNOWN, temporary: true };
      }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return {
            kind: ApiErrorKind.UNAUTHORIZED,
            message: response.data?.errors,
          };
        case 403:
          return { kind: ApiErrorKind.FORBIDDEN };
        case 404:
          return { kind: ApiErrorKind.NOT_FOUND, data: response.data?.errors };
        case 422:
          return {
            kind: ApiErrorKind.UNPROCESSABLE,
            data: response.data?.errors,
          };
        default:
          return {
            kind: ApiErrorKind.REJECTED,
            data: response.data?.errors || response.data?.message,
          };
      }
    case "CANCEL_ERROR":
    default:
      return null;
  }
}
