import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRecipe } from "../../interfaces/IRecipe";

@Injectable({
  providedIn: "root",
})
export class PlcService {
  private apiUrl: string = "http://localhost:8000";
  private endpointUrl: string = this.apiUrl + "/plc";

  constructor(private httpClient: HttpClient) {}

  public get(): Observable<any> {
    return this.httpClient.get<number>(this.endpointUrl);
  }

  public setRecipe(moduleId: number, recipe: IRecipe): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
        recipeId: recipe._id,
      })
    );

    return this.httpClient.post<any>(this.endpointUrl, params);
  }
}
