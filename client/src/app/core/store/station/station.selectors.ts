import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { IAppState } from "../states";
import { IStationState } from "./station.state";

export const getStationState = (state: IAppState) => state.stationState;

export const getStationVelocity = createSelector(getStationState, (state: IStationState) => state.module[0].process[0].spindle_velocity);
export const getStationTime = createSelector(getStationState, (state: IStationState) => state.module[0].process[0].spindle_velocity);

export const getStation = createSelector(getStationState, (state: IStationState) => state);
export const getModule = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id]);

export const getAlarmsModule = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].alarm);
export const getAlarmsProcess = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].alarm);

export const getAllowRecipeChangeStatus = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].allow_recipe_change);
export const getAllowGrindingStart = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].allow_grinding_start);
export const getAllowGrindingStop = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].allow_grinding_stop);
export const getAllowTestStart = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].allow_test_start);
export const getAllowTestStop = createSelector(getStationState, selectRouteParams, (state: IStationState, { id }) => state.module[id].process[0].allow_test_stop);
