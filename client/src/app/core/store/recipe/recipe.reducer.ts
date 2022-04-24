import { createReducer, on, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { addRecipe, removeRecipe } from "./recipe.actions";
import { IRecipeState, initialRecipeState } from "./recipe.state";

export const recipeReducer = createReducer(
  initialRecipeState,
  on(addRecipe, (state, props) => onAddRecipe(state, props)),
  on(removeRecipe, (state, props) => onRemoveRecipe(state, props))
);

const onAddRecipe = (state: IRecipeState, props: { recipe: IRecipe }) => ({
  ...state,
  recipe: state.recipe.concat(props.recipe),
});

const onRemoveRecipe = (state: IRecipeState, props: { recipe: IRecipe }) => ({
  ...state,
  recipe: state.recipe.filter((recipes) => recipes !== props.recipe),
});
