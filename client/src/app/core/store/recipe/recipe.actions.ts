import { createAction, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";

export const addRecipe = createAction("[Settings page] Add recipe", props<{ recipe: Partial<IRecipe> }>());
export const recipeAdded = createAction("[Recipe store] Recipe added", props<{ recipe: Partial<IRecipe> }>());

export const removeRecipe = createAction("[Settings page] Remove recipe", props<{ id: string }>());
export const recipeRemoved = createAction("[Recipe store] Recipe removed");

export const getRecipes = createAction("[Settings page] Get recipes");
export const recipesReceived = createAction("[Recipe store] Recipes received", props<{ recipe: IRecipe[] }>());

export const changeEditRecipe = createAction("[Settings page] Change edit recipe", props<{ recipeEdit: IRecipe }>());
export const editRecipeChanged = createAction("[Recipe store] Edit recipe changed");

export const changeRecipeName = createAction("[Settings page] Change recipe name", props<{ name: string }>());
export const recipeNameChanged = createAction("[Settings page] Recipe name changed");

export const changeRecipeTemperatureLimit = createAction("[Settings page] Change recipe temperature limit", props<{ temperatureLimit: number }>());
export const recipeTemperatureLimitChanged = createAction("[Settings page] Recipe temperature limit changed");

export const addRecipeStep = createAction("[Settings page] Add recipe step", props<{ step: IRecipeStep }>());
export const recipeStepAdded = createAction("[Settings page] Recipe step added");

export const saveRecipe = createAction("[Settings page] Save recipe");
export const recipeSaved = createAction("[Recipe store] Recipe saved");
