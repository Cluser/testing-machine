import { createSelector } from "@ngrx/store";
import { AppState } from "../states";
import { StationState } from "./station.state";

export const getStationState = (state: AppState) => state.stationState;

export const getStationVelocity = createSelector(getStationState, (state: StationState) => state.module[0].process[0].spindle_velocity);
export const getStationTime = createSelector(getStationState, (state: StationState) => state.module[0].process[0].spindle_velocity);

export const getStationVelocity2 = createSelector(getStationState, (state: StationState) => state.module[1].process[0].spindle_velocity);
export const getStationTime2 = createSelector(getStationState, (state: StationState) => state.module[1].process[0].spindle_velocity);

export const getStation = createSelector(getStationState, (state: StationState) => state);
