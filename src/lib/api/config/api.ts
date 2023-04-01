import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosParams = {
  baseURL: ""
};

// Mission Start!! ... finally

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: AxiosRequestConfig<any> = {}) =>
      axios.get(url, config),
    post: (url: string, body: any, config: AxiosRequestConfig<any> = {}) =>
      axios.post(url, body, config),
    put: (url: string, body: any, config: AxiosRequestConfig<any> = {}) =>
      axios.put(url, body, config),
    patch: (url: string, body: any, config: AxiosRequestConfig<any> = {}) =>
      axios.patch(url, body, config),
    delete: (url: string, config: AxiosRequestConfig<any> = {}) =>
      axios.delete(url, config)
  };
};

export default api(axiosInstance);
