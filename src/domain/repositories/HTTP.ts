export interface Http {
  get: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T>;
  post: <T, K = any>(path: string, body?: K, config?: any) => Promise<T>;
  put: <T, K = any>(path: string, body: K, config?: any) => Promise<T>;
  delete: <T>(path: string, params?: any, config?: any) => Promise<T>;
}
