import { createReducer, on, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { addRecipe } from "./recipe.actions";
import { IRecipeState, initialRecipeState } from "./recipe.state";

export const recipeReducer = createReducer(
  initialRecipeState,
  on(addRecipe, (state, props) => onAddRecipe(state, props))
);

const onAddRecipe = (state: IRecipeState, props: { recipe: IRecipe }) => ({
  ...state,
});
