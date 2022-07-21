import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router";
import { IAppState } from "../states";
import { IRecipeState } from "./recipe.state";

export const getRecipeState = (state: IAppState) => state.recipeState;

export const getRecipesData = createSelector(getRecipeState, (state: IRecipeState) => state);

export const getRecipeEditData = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit);
export const getRecipeEditSteps = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit.steps);
export const getRecipeEditType = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit.type);
export const getRecipeEditIdNumber = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit.idNumber);
export const getRecipeEditVersion = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit.version);
export const getRecipeEditTemperatureLimit = createSelector(getRecipeState, (state: IRecipeState) => state.recipeEdit.temperatureLimit);
export const getRecipeActive = createSelector(getRecipeState, selectRouteParams, (state: IRecipeState, { id }) => state.recipeActive[id]);
