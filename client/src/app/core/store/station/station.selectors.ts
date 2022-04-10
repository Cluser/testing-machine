import { createSelector } from "@ngrx/store";
import { AppState } from "../states";
import { StationState } from "./station.state";

export const getStationState = (state: AppState) => state.stationState;

export const getStationVelocity = createSelector(getStationState, (state: StationState) => state.velocity);
export const getStationTime = createSelector(getStationState, (state: StationState) => state.time);
