import { IRecipeStep } from "./IRecipeStep";

export interface IRecipe {
  name: string;
  step: IRecipeStep[];
}
