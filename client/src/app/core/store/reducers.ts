import { Action, ActionReducerMap } from "@ngrx/store";
import { stationReducer } from "./station";
import { AppState } from "./states";
import { routerReducer } from "@ngrx/router-store";

export * from "./station/station.reducer";

export const REDUCERS: ActionReducerMap<AppState, Action> | any = {
  stationState: stationReducer,
  router: routerReducer,
};
