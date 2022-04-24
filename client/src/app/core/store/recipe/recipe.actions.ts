import { createAction, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";

export const addRecipe = createAction("[Settings page] Add recipe", props<{ recipe: IRecipe }>());
export const recipeAdded = createAction("[Recipe store] Recipe added");

export const removeRecipe = createAction("[Settings page] Remove recipe", props<{ id: string }>());
export const recipeRemoved = createAction("[Recipe store] Recipe removed");

export const getRecipes = createAction("[Settings page] Get recipes");
export const recipesReceived = createAction("[Recipe store] Recipes received", props<{ recipe: IRecipe[] }>());
