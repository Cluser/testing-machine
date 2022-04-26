import { createSelector } from "@ngrx/store";
import { IAppState } from "../states";
import { IRecipeState } from "./recipe.state";

export const getRecipeState = (state: IAppState) => state.recipeState;

export const getRecipesData = createSelector(getRecipeState, (state: IRecipeState) => state);
export const getRecipeEditData = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit);
