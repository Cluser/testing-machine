import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { map, mergeMap, tap } from "rxjs/operators";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class RecipeEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}
}
