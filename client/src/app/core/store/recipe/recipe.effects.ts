import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { map, mergeMap, concatMap, switchMap, tap } from "rxjs/operators";
import {
  addRecipe,
  changeEditRecipe,
  editRecipeChanged,
  getRecipes,
  initRecipes,
  recipeAdded,
  recipeRemoved,
  recipeSaved,
  recipesInitiated,
  recipesReceived,
  removeRecipe,
  saveRecipe,
  setRecipeActive,
} from "./recipe.actions";
import { Store } from "@ngrx/store";
import { IAppState } from "../states";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class RecipeEffects {
  constructor(private actions$: Actions, private apiService: ApiService, private store$: Store<IAppState>) {}

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
      concatLatestFrom(() => this.store$.select((appState) => appState.recipeState.recipe)),
      map((data) => data[1]),
      concatMap((data) => [getRecipes(), changeEditRecipe({ recipeEdit: data[0] })])
    )
  );

  changeEditRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeEditRecipe),
      map(() => editRecipeChanged())
    )
  );

  saveRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveRecipe),
      concatLatestFrom(() => this.store$.select((appState) => appState.recipeState.recipeEdit)),
      map((data) => data[1]),
      switchMap((data) => this.apiService.recipe.put(data._id!, data).pipe(map(() => recipeSaved())))
    )
  );

  initRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initRecipes),
      mergeMap(() => this.apiService.recipe.get().pipe(map((recipes) => recipesInitiated({ recipe: recipes }))))
    )
  );

  setRecipeActive$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setRecipeActive),
        switchMap((data) => this.apiService.plc.setRecipe(data.idModule, data.recipe))
      ),
    { dispatch: false }
  );
}
