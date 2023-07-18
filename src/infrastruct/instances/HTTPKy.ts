import { Http } from "@/domain/repositories/HTTP";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ky, { Options } from "ky-universal";

const headers = {
  "Content-Type": "application/json",
};

export const httpKy: Http = {
  get: async <T>(
    path: string,
    params?: Record<string, any>,
    config?: Options,
  ) => {
    return await ky
      .get(path, {
        ...config,
        searchParams: params,
        headers,
      })
      .json<T>();
  },
  post: async <T, K>(path: string, body: K, config?: Options) => {
    return await ky.post(path, { ...config, headers, json: body }).json<T>();
  },
  put: async <T, K>(path: string, body: K, config?: Options) => {
    return await ky.put(path, { ...config, headers, json: body }).json<T>();
  },
  delete: async <T>(path: string, params?: any, config?: Options) => {
    return await ky
      .delete(path, {
        ...config,
        params: params,
        headers,
      })
      .json<T>();
  },
};
