import { IRecipe } from "src/app/shared/interfaces/IRecipe";

export interface IRecipeState {
  recipeActive: Partial<IRecipe>[];
  recipeEdit: Partial<IRecipe>;
  recipe: IRecipe[];
}

export const initialRecipeState: IRecipeState = {
  recipeActive: [{}, {}, {}],
  recipeEdit: {},
  recipe: [],
};
