import { createSelector } from "@ngrx/store";
import { AppState } from "../states";
import { StationState } from "./station.state";

export const getStationState = (state: AppState) => state.stationState;

export const getStationValue = createSelector(getStationState, (state: StationState) => state.value);

// Wydzielenie selectora kroku licznika
export const getStationStep = createSelector(getStationState, (state: StationState) => state.step);
