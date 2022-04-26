import { IRecipeStep } from "./IRecipeStep";

export interface IRecipe {
  _id: string;
  name: string;
  temperatureLimit: number;
  steps: IRecipeStep[];
}
