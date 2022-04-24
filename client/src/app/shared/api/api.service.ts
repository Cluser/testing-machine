import { Injectable } from "@angular/core";

import * as endpoint from "./endpoints/";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(public measurement: endpoint.MeasurementService, public recipe: endpoint.RecipeService) {}
}
