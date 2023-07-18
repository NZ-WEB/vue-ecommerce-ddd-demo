import { Http } from '@/domain/repositories/HTTP';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ky, { Options } from 'ky-universal';

const headers = {
  'Content-Type': 'application/json',
};

export const httpKy = (options: Options): Http => {
  const instance = ky.create(options);

  return {
    get: async <T>(
      path: string,
      params?: Record<string, any>,
      config?: Options
    ) => {
      return await instance
        .get(path, {
          ...config,
          searchParams: params,
          headers,
        })
        .json<T>();
    },
    post: async <T, K>(path: string, body: K, config?: Options) => {
      return await instance
        .post(path, { ...config, headers, json: body })
        .json<T>();
    },
    put: async <T, K>(path: string, body: K, config?: Options) => {
      return await instance
        .put(path, { ...config, headers, json: body })
        .json<T>();
    },
    delete: async <T>(path: string, params?: any, config?: Options) => {
      return await instance
        .delete(path, {
          ...config,
          searchParams: params,
          headers,
        })
        .json<T>();
    },
  };
};
