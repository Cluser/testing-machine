import { Action, ActionReducerMap } from "@ngrx/store";
import { stationReducer } from "./station";
import { chartReducer } from "./chart";
import { recipeReducer } from "./recipe";
import { IAppState } from "./states";
import { routerReducer } from "@ngrx/router-store";

export * from "./station/station.reducer";
export * from "./chart/chart.reducer";
export * from "./recipe/recipe.reducer";

export const REDUCERS: ActionReducerMap<IAppState, Action> | any = {
  stationState: stationReducer,
  chartState: chartReducer,
  recipeState: recipeReducer,
  router: routerReducer,
};
