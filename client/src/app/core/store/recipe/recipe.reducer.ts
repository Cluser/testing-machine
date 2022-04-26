import { createReducer, on, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { addRecipe, changeEditRecipe, editRecipeChanged, getRecipes, recipeAdded, recipeRemoved, recipesReceived, removeRecipe } from "./recipe.actions";
import { IRecipeState, initialRecipeState } from "./recipe.state";

export const recipeReducer = createReducer(
  initialRecipeState,
  on(addRecipe, (state, props) => onAddRecipe(state, props)),
  on(recipeAdded, (state) => onRecipeAdded(state)),
  on(removeRecipe, (state, props) => onRemoveRecipe(state, props)),
  on(recipeRemoved, (state) => onRecipeRemoved(state)),
  on(getRecipes, (state) => onGetRecipes(state)),
  on(recipesReceived, (state, props) => onRecipesReceived(state, props)),
  on(changeEditRecipe, (state, props) => onChangeEditRecipe(state, props)),
  on(editRecipeChanged, (state) => onEditRecipeChanged(state))
);

const onAddRecipe = (state: IRecipeState, props: { recipe: Partial<IRecipe> }) => ({
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

const onChangeEditRecipe = (state: IRecipeState, props: { recipeEdit: IRecipe }) => ({
  ...state,
  recipeEdit: props.recipeEdit,
});

const onEditRecipeChanged = (state: IRecipeState) => ({
  ...state,
});
