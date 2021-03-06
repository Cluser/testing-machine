import { createReducer, on, props } from "@ngrx/store";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";
import {
  addRecipe,
  addRecipeStep,
  changeEditRecipe,
  changeRecipeType,
  changeRecipeIdNumber,
  changeRecipeVersion,
  changeRecipeTemperatureLimit,
  changeStepValue,
  editRecipeChanged,
  getRecipes,
  initRecipes,
  recipeAdded,
  recipeRemoved,
  recipesInitiated,
  recipesReceived,
  removeRecipe,
  removeRecipeStep,
  saveRecipe,
  setRecipeActive,
} from "./recipe.actions";
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
  on(editRecipeChanged, (state) => onEditRecipeChanged(state)),
  on(changeRecipeType, (state, props) => onChangeRecipeType(state, props)),
  on(changeRecipeIdNumber, (state, props) => onChangeRecipeIdNumber(state, props)),
  on(changeRecipeVersion, (state, props) => onChangeRecipeVersion(state, props)),
  on(changeRecipeTemperatureLimit, (state, props) => onChangeRecipeTemperatureLimit(state, props)),
  on(addRecipeStep, (state, props) => onAddRecipeStep(state, props)),
  on(removeRecipeStep, (state, props) => onRemoveRecipeStep(state, props)),
  on(saveRecipe, (state) => onSaveRecipe(state)),
  on(changeStepValue, (state, props) => onChangeStepValue(state, props)),
  on(setRecipeActive, (state, props) => onSetRecipeActive(state, props)),
  on(initRecipes, (state) => onInitRecipes(state)),
  on(recipesInitiated, (state, props) => onRecipesInitiated(state, props))
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

const onChangeEditRecipe = (state: IRecipeState, props: { recipeEdit: Partial<IRecipe> }) => ({
  ...state,
  recipeEdit: props.recipeEdit,
});

const onEditRecipeChanged = (state: IRecipeState) => ({
  ...state,
});

const onChangeRecipeType = (state: IRecipeState, props: { spindleType: string }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    type: props.spindleType,
  },
});

const onChangeRecipeIdNumber = (state: IRecipeState, props: { idNumber: string }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    idNumber: props.idNumber,
  },
});

const onChangeRecipeVersion = (state: IRecipeState, props: { version: string }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    version: props.version,
  },
});

const onChangeRecipeTemperatureLimit = (state: IRecipeState, props: { temperatureLimit: number }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    temperatureLimit: props.temperatureLimit,
  },
});

const onAddRecipeStep = (state: IRecipeState, props: { step: IRecipeStep }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    steps: state.recipeEdit.steps?.concat(props.step),
  },
});

const onRemoveRecipeStep = (state: IRecipeState, props: { step: IRecipeStep[] }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    steps: props.step,
  },
});

const onSaveRecipe = (state: IRecipeState) => ({
  ...state,
  recipe: state.recipe.map((recipe: any) => (recipe._id == state.recipeEdit._id ? state.recipeEdit : recipe)),
});

const onChangeStepValue = (state: IRecipeState, props: { id: string; property: string; value: any }) => ({
  ...state,
  recipeEdit: {
    ...state.recipeEdit,
    steps: state.recipeEdit.steps?.map((step, idx) => (idx === Number(props.id) ? { ...step, [props.property]: props.value } : step)),
  },
});

const onSetRecipeActive = (state: IRecipeState, props: { idModule: number; recipe: IRecipe }) => ({
  ...state,
  recipeActive: state.recipeActive.map((recipe, id) => (id === props.idModule ? props.recipe : recipe)),
});

const onInitRecipes = (state: IRecipeState) => ({
  ...state,
});

const onRecipesInitiated = (state: IRecipeState, props: { recipe: IRecipe[] }) => ({
  ...state,
  recipeEdit: {
    ...props.recipe[0],
  },
  recipe: props.recipe,
});
