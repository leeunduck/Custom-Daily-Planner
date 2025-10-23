import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./client";

export const HTTP_METHODS = { GET: "GET", POST: "POST", PATCH: "PATCH", DELETE: "DELETE" } as const;
type Methods = keyof typeof HTTP_METHODS;

// ✅ Axios가 허용하는 안전한 쿼리 파라미터 타입(원시값 + 배열)
type Primitive = string | number | boolean | null | undefined;
export type QueryParams = Record<string, Primitive | Primitive[]>;

// ✅ 안전한 헤더 타입
export type HeaderMap = Record<string, string>;

export type ApiRequestParams<TBody = unknown> = {
  url: string;
  method?: Methods; // default GET
  params?: QueryParams;
  data?: TBody;
  headers?: HeaderMap;
  config?: Omit<AxiosRequestConfig, "url" | "method" | "params" | "data" | "headers">;
};

/** ✅ 기본 fetcher (전역 api 인스턴스 사용) */
export async function fetcher<TResponse, TBody = unknown>(
  args: ApiRequestParams<TBody>,
): Promise<AxiosResponse<TResponse>> {
  const { url, method = "GET", params, data, headers, config } = args;
  return api.request<TResponse>({ url, method, params, data, headers, ...config });
}
