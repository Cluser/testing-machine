import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MeasurementService {
  private apiUrl: string = "http://localhost:8000";
  private endpointUrl: string = this.apiUrl + "/Measurement";

  constructor(private httpClient: HttpClient) {}

  public get(): Observable<any> {
    return this.httpClient.get<number>(this.endpointUrl);
  }
}
