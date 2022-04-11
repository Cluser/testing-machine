import { createAction, props } from "@ngrx/store";
import { StationState } from "./station.state";

export const openSocket = createAction("[Station] Open socket");
export const socketOpened = createAction("[Station] Socket opened");
export const closeSocket = createAction("[Station] Close socket");
export const socketClosed = createAction("[Station] Socket closed");
export const getData = createAction("[Station] Get station data", props<{ station: StationState }>());
