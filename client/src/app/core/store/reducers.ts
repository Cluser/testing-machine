import { Action, ActionReducerMap } from "@ngrx/store";
import { stationReducer } from "./station";
import { IAppState } from "./states";
import { routerReducer } from "@ngrx/router-store";

export * from "./station/station.reducer";

export const REDUCERS: ActionReducerMap<IAppState, Action> | any = {
  stationState: stationReducer,
  router: routerReducer,
};
