import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { map, mergeMap, concatMap, tap } from "rxjs/operators";
import { addRecipe, changeEditRecipe, editRecipeChanged, getRecipes, recipeAdded, recipeRemoved, recipesReceived, removeRecipe } from "./recipe.actions";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class RecipeEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRecipe),
      mergeMap((data) => this.apiService.recipe.post(data.recipe).pipe(map((data) => recipeAdded(data))))
    )
  );

  recipeAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeAdded),
      concatMap((data: any) => [getRecipes(), changeEditRecipe({ recipeEdit: data[0] })])
    )
  );

  getRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecipes),
      mergeMap(() => this.apiService.recipe.get().pipe(map((recipes) => recipesReceived({ recipe: recipes }))))
    )
  );

  removeRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeRecipe),
      mergeMap((data) => this.apiService.recipe.delete(data.id).pipe(map(() => recipeRemoved())))
    )
  );

  recipeRemoved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeRemoved),
      map(() => getRecipes())
    )
  );

  changeEditRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeEditRecipe),
      tap((data) => console.log(data)),
      map(() => editRecipeChanged())
    )
  );
}
