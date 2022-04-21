import { createSelector } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { IAppState } from "../states";
import { IChartState } from "./chart.state";

export const getChartState = (state: IAppState) => state.chartState;

export const getChartData = createSelector(getChartState, selectRouteParams, (state: IChartState, { id }) => state.chart[id]);
