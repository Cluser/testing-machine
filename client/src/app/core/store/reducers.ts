import { Action, ActionReducerMap } from "@ngrx/store";
import { stationReducer } from "./station";
import { chartReducer } from "./chart";
import { IAppState } from "./states";
import { routerReducer } from "@ngrx/router-store";

export * from "./station/station.reducer";
export * from "./chart/chart.reducer";

export const REDUCERS: ActionReducerMap<IAppState, Action> | any = {
  stationState: stationReducer,
  chartState: chartReducer,
  router: routerReducer,
};
