import { IStationState } from "./station/station.state";

export * from "./station/station.state";

export interface IAppState {
  stationState: IStationState;
}
