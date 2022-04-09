import { StationState } from "./station/station.state";

export * from "./station/station.state";

// Definicja stanu aplikacji
export interface AppState {
  stationState: StationState;
}
