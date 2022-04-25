import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { map, mergeMap, tap } from "rxjs/operators";
import { addRecipe, getRecipes, recipeAdded, recipeRemoved, recipesReceived, removeRecipe } from "./recipe.actions";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class RecipeEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRecipe),
      mergeMap((data) =>
        this.apiService.recipe.post(data["recipe"]).pipe(
          map((recipe) => ({
            type: recipeAdded.type,
            recipe: recipe,
          }))
        )
      )
    )
  );

  recipeAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeAdded),
      map(() => ({
        type: getRecipes.type,
      }))
    )
  );

  getRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecipes),
      mergeMap(() =>
        this.apiService.recipe.get().pipe(
          map((recipes) => ({
            type: recipesReceived.type,
            recipe: recipes,
          }))
        )
      )
    )
  );

  removeRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeRecipe),
      mergeMap((id) =>
        this.apiService.recipe.delete(id.id).pipe(
          map((recipe) => ({
            type: recipeRemoved.type,
            recipe: recipe,
          }))
        )
      )
    )
  );

  recipeRemoved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeRemoved),
      map(() => ({
        type: getRecipes.type,
      }))
    )
  );
}
