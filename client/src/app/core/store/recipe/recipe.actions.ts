import { createAction, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";

export const addRecipe = createAction("[Settings page] Add recipe", props<{ recipe: Partial<IRecipe> }>());
export const recipeAdded = createAction("[Recipe store] Recipe added", props<{ recipe: Partial<IRecipe> }>());

export const removeRecipe = createAction("[Settings page] Remove recipe", props<{ id: string }>());
export const recipeRemoved = createAction("[Recipe store] Recipe removed");

export const getRecipes = createAction("[Settings page] Get recipes");
export const recipesReceived = createAction("[Recipe store] Recipes received", props<{ recipe: IRecipe[] }>());

export const changeEditRecipe = createAction("[Settings page] Change edit recipe", props<{ recipeEdit: Partial<IRecipe> }>());
export const editRecipeChanged = createAction("[Recipe store] Edit recipe changed");

export const changeRecipeType = createAction("[Settings page] Change recipe type", props<{ spindleType: string }>());
export const recipeTypeChanged = createAction("[Settings page] Recipe type changed");

export const changeRecipeIdNumber = createAction("[Settings page] Change recipe id number", props<{ idNumber: string }>());
export const recipeIdNumberChanged = createAction("[Settings page] Recipe id number changed");

export const changeRecipeVersion = createAction("[Settings page] Change recipe version", props<{ version: string }>());
export const recipeVersionChanged = createAction("[Settings page] Recipe version changed");

export const changeRecipeTemperatureLimit = createAction("[Settings page] Change recipe temperature limit", props<{ temperatureLimit: number }>());
export const recipeTemperatureLimitChanged = createAction("[Settings page] Recipe temperature limit changed");

export const addRecipeStep = createAction("[Settings page] Add recipe step", props<{ step: IRecipeStep }>());
export const recipeStepAdded = createAction("[Settings page] Recipe step added");

export const removeRecipeStep = createAction("[Settings page] Remove recipe step", props<{ step: IRecipeStep[] }>());
export const recipeStepRemoved = createAction("[Settings page] Recipe step removed");

export const saveRecipe = createAction("[Settings page] Save recipe");
export const recipeSaved = createAction("[Recipe store] Recipe saved");

export const changeStepValue = createAction("[Settings page] Change step value", props<{ id: string; property: string; value: any }>());
export const stepValueChanged = createAction("[Settings page] Step value changed");

export const setRecipeActive = createAction("[Module page] Set recipe active", props<{ idModule: number; recipe: IRecipe }>());
export const recipeActiveSet = createAction("[Module page] Recipe active set");

export const initRecipes = createAction("[Settings page] Init recipes");
export const recipesInitiated = createAction("[Recipe store] Recipes initiated", props<{ recipe: IRecipe[] }>());
