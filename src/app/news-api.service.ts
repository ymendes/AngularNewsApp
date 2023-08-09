import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsApiService {
  // Add your API key here
  api_key = "38824f48fe2e4103bde14695d1d6b27b";

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      "https://newsapi.org/v2/sources?language=pt&apiKey=" + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=globo&apiKey=" +
        this.api_key
    );
  }

  getArticlesByID(source: String) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.api_key
    );
  }
}
