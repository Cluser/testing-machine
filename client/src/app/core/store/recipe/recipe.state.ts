import { IRecipe } from "src/app/shared/interfaces/IRecipe";

export interface IRecipeState {
  recipe: IRecipe[];
}

export const initialRecipeState: IRecipeState = {
  recipe: [],
};
