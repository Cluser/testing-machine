import { IStationState } from "./station";
import { IChartState } from "./chart";

export * from "./station/station.state";
export * from "./chart/chart.state";

export interface IAppState {
  stationState: IStationState;
  chartState: IChartState;
}
