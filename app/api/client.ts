import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class ApiClient {
  private readonly client: AxiosInstance;

  constructor(baseURL: string, options: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL,
      ...options,
    });
  }

  public get(url: string, config: AxiosRequestConfig = {}) {
    try {
      return this.client.get(url, config);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching news:", error.response?.data || error);
      } else {
        console.error("Error fetching news:", error);
      }

      throw error;
    }
  }

  public post(url: string, data: any, config: AxiosRequestConfig = {}) {
    try {
      return this.client.post(url, data, config);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Error posting news:", error.response?.data || error);
      } else {
        console.error("Error posting news:", error);
      }

      throw error;
    }
  }
}
