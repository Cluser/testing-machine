import { Action, ActionReducerMap } from "@ngrx/store";
import { stationReducer } from "./station";
import { AppState } from "./states";

export * from "./station/station.reducer";

export const REDUCERS: ActionReducerMap<AppState, Action> = {
  stationState: stationReducer,
};
