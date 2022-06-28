import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRecipe } from "../../interfaces/IRecipe";

@Injectable({
  providedIn: "root",
})
export class PlcService {
  private apiUrl: string = "http://localhost:8000";
  private endpointUrl: string = this.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public setRecipe(moduleId: number, recipe: IRecipe): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
        recipeId: recipe._id,
      })
    );

    return this.httpClient.post<any>(this.endpointUrl + "/plc", params);
  }

  public confirmPlateChange(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/confirmPlateChange", params);
  }

  public startGrinding(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/startGrinding", params);
  }

  public stopGrinding(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/stopGrinding", params);
  }

  public startTesting(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/startTesting", params);
  }

  public stopTesting(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/stopTesting", params);
  }

  public reset(moduleId: number): Observable<any> {
    const params = JSON.parse(
      JSON.stringify({
        moduleId: moduleId,
      })
    );
    return this.httpClient.post(this.endpointUrl + "/reset", params);
  }
}
