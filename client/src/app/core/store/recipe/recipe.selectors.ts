import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { IAppState } from "../states";
import { IRecipeState } from "./recipe.state";

export const getRecipeState = (state: IAppState) => state.recipeState;

export const getRecipetData = createSelector(getRecipeState, selectRouteParams, (state: IRecipeState, { id }) => state.recipe[id]);
