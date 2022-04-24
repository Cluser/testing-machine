import { createReducer, on, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { addRecipe, getRecipes, recipeAdded, recipeRemoved, recipesReceived, removeRecipe } from "./recipe.actions";
import { IRecipeState, initialRecipeState } from "./recipe.state";

export const recipeReducer = createReducer(
  initialRecipeState,
  on(addRecipe, (state, props) => onAddRecipe(state, props)),
  on(recipeAdded, (state) => onRecipeAdded(state)),
  on(removeRecipe, (state, props) => onRemoveRecipe(state, props)),
  on(recipeRemoved, (state) => onRecipeRemoved(state)),
  on(getRecipes, (state) => onGetRecipes(state)),
  on(recipesReceived, (state, props) => onRecipesReceived(state, props))
);

const onAddRecipe = (state: IRecipeState, props: { recipe: IRecipe }) => ({
  ...state,
});

const onRecipeAdded = (state: IRecipeState) => ({
  ...state,
});

const onRemoveRecipe = (state: IRecipeState, props: { id: string }) => ({
  ...state,
});

const onRecipeRemoved = (state: IRecipeState) => ({
  ...state,
});

const onGetRecipes = (state: IRecipeState) => ({
  ...state,
});

const onRecipesReceived = (state: IRecipeState, props: { recipe: IRecipe[] }) => ({
  ...state,
  recipe: props.recipe,
});
