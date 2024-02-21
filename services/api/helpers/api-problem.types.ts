/* eslint-disable no-unused-vars */
import { ApiError } from '../api-core.types'

export enum ApiErrorKind {
  TIMEOUT = 'timeout',
  CONNECTION = 'cannot-connect',
  SERVER = 'server',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not-found',
  GONE = 'gone',
  UNPROCESSABLE = 'unprocessable-entity',
  REJECTED = 'rejected',
  UNKNOWN = 'unknown',
  BAD_DATA = 'bad-data',
  FOUND = 'found',
  CONFLICT = 'conflict',
}

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: ApiErrorKind.TIMEOUT; temporary: true }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: ApiErrorKind.CONNECTION; temporary: true }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: ApiErrorKind.SERVER; data?: ApiError }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: ApiErrorKind.UNAUTHORIZED; message?: string }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: ApiErrorKind.FORBIDDEN }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: ApiErrorKind.NOT_FOUND; data?: ApiError }
  /**
   * Unable to find that resource.  This is a 410.
   */
  | { kind: ApiErrorKind.GONE }
  /**
   * The data we sent is not valid.  This is a 422.
   */
  | { kind: ApiErrorKind.UNPROCESSABLE; data?: ApiError }
  /**
   * All other 4xx series errors.
   */
  | { kind: ApiErrorKind.REJECTED; data?: ApiError }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: ApiErrorKind.UNKNOWN; temporary: true }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: ApiErrorKind.BAD_DATA }
  /**
   * No an error but a temporary redirect.  This is a 302.
   */
  | { kind: ApiErrorKind.FOUND; temporary: true }
