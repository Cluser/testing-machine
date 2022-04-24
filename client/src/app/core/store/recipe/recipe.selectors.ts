import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { IAppState } from "../states";
import { IRecipeState } from "./recipe.state";

export const getRecipeState = (state: IAppState) => state.recipeState;

// export const getRecipe = createSelector(getRecipeState, (state: IRecipeState, props: { id }) => state.recipe[id]);
export const getRecipesData = createSelector(getRecipeState, (state: IRecipeState) => state);
