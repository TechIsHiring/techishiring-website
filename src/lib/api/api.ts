import axios, { AxiosStatic } from "axios";

const axiosParams = {
  baseURL: "solve later"
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosStatic) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    post: (url: string, body: any, config = {}) => axios.post(url, body, config),
    put: (url: string, body: any, config = {}) => axios.put(url, body, config),
    patch: (url: string, body: any, config = {}) => axios.patch(url, body, config),
    delete: (url: string, config = {}) => axios.delete(url, config)
  }
};

export default api;