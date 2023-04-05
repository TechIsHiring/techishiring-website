const api = {
  get: (url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "GET",
    ...config
  }),
  post: (url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "POST",
    body,
    ...config
  }),
  put: (url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PUT",
    body,
    ...config
  }),
  patch: (url: URL | RequestInfo, body: any, config: RequestInit = {}) => fetch(url, {
    method: "PATCH",
    body,
    ...config
  }),
  delete: (url: URL | RequestInfo, config: RequestInit = {}) => fetch(url, {
    method: "DELETE",
    ...config
  })
};

export default api;