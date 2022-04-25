import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRecipe } from "../../interfaces/IRecipe";

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

  public post(recipe: IRecipe): Observable<any> {
    return this.httpClient.post<any>(this.endpointUrl, recipe);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.endpointUrl + `/${id}`);
  }
}
