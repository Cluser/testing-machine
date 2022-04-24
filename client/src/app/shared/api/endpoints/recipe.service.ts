import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private apiUrl: string = "http://localhost:8000";
  private endpointUrl: string = this.apiUrl + "/recipe";

  constructor(private httpClient: HttpClient) {}

  public get(): Observable<any> {
    return this.httpClient.get<any>(this.endpointUrl);
  }

  public post(): Observable<any> {
    return this.httpClient.post<any>(this.endpointUrl, { name: "test", step: [] });
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.endpointUrl + `/${id}`);
  }
}
