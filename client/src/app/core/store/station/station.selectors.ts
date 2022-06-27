import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { IAppState } from "../states";
import { IStationState } from "./station.state";

export const getStationState = (state: IAppState) => state.stationState;

export const getStationVelocity = createSelector(getStationState, (state: IStationState) => state.module[0].process[0].spindle_velocity);
export const getStationTime = createSelector(getStationState, (state: IStationState) => state.module[0].process[0].spindle_velocity);

export const getStation = createSelector(getStationState, (state: IStationState) => state);
export const getModule = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id]);

export const getAlarms = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].alarm);
