import { Injectable } from "@angular/core";

import * as endpoint from "./endpoints/";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(public plc: endpoint.PlcService, public recipe: endpoint.RecipeService) {}
}
