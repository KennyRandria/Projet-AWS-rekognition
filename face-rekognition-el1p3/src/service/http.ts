import axios, { AxiosRequestConfig, AxiosError } from "axios";

// axios.defaults.baseURL = import.meta.env?.VITE_API_BASE_URL;
// console.log(import.meta.env?.VITE_API_BASE_URL);
// axios.defaults.baseURL = "https://virtserver.swaggerhub.com/hei.herizo/Hei-Admin/1.0.0/";
axios.defaults.baseURL = "http://localhost:8080/";

export class Http {
  static async get(url: string, params?: AxiosRequestConfig<any>) {
    try {
      const { data } = await axios.get(url, params);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      // eslint-disable-next-line no-throw-literal
      throw `HTTP::GET, ${error.message}`;
    }
  }

  static async post(url: string, params?: AxiosRequestConfig<any>) {
    try {
      const { data } = await axios.post(url, params);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      // eslint-disable-next-line no-throw-literal
      throw `HTTP::POST, ${error.message}`;
    }
  }
  static async put(url: string, params?: AxiosRequestConfig<any>) {
    try {
      const { data } = await axios.put(url, params);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      // eslint-disable-next-line no-throw-literal
      throw `HTTP::PUT, ${error.message}`;
    }
  }
}
