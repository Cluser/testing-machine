import { IRecipeStep } from "./IRecipeStep";

export interface IRecipe {
  _id: string;
  type: string;
  idNumber: string;
  version: string;
  temperatureLimit: number;
  steps: IRecipeStep[];
}
