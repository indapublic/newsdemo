import { config } from "@/config";
import { ApiClient } from "./client";
import { Articles } from "./types";

export class ApiSdk {
  private readonly apiClient: ApiClient;
  private apiKey: string;

  constructor() {
    this.apiKey = config.newsApiKey;
    this.apiClient = new ApiClient("https://newsapi.org/v2", {
      headers: {
        "x-api-key": this.apiKey,
      },
    });
  }

  setApiKey = (apiKey: string): void => {
    this.apiKey = apiKey;
  };

  getAuthHeaders = (): Record<string, string> => {
    return {
      "x-api-key": this.apiKey,
    };
  };

  /**
   * Get news.
   *
   * @returns {Promise<NewsItems>}
   */
  getNews = async (
    category: string | undefined = undefined,
    q: string | undefined = undefined,
    page: number = 1,
  ): Promise<{
    articles: Articles;
    status: "ok";
    totalResults: number;
  }> => {
    try {
      const params: Record<string, string | number | undefined> = {
        page,
        pageSize: 10,
        country: "us",
      };

      if (category) {
        params.category = category;
      }

      if (q) {
        params.q = q;
      }

      const response = await this.apiClient.get("/top-headlines", {
        params,
        headers: this.getAuthHeaders(),
      });

      console.debug("API Response:", response);

      return response.data;
    } catch (error: any) {
      console.error("Error fetching news:", error.response?.data || error);

      throw error;
    }
  };
}
