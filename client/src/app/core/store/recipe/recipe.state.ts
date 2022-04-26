import { IRecipe } from "src/app/shared/interfaces/IRecipe";

export interface IRecipeState {
  recipeEdit: Partial<IRecipe>;
  recipe: IRecipe[];
}

export const initialRecipeState: IRecipeState = {
  recipeEdit: { name: "test" },
  recipe: [],
};
