import { createAction, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";

export const addRecipe = createAction("[Settings page] Add recipe", props<{ recipe: IRecipe }>());
