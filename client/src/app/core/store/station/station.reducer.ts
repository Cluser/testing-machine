import { createReducer, on, props } from "@ngrx/store";
import { closeSocket, getData, openSocket, socketClosed, socketOpened } from "./station.actions";
import { StationState, initialState } from "./station.state";

export const stationReducer = createReducer(
  initialState,
  on(openSocket, (state) => onOpenSocket(state)),
  on(socketOpened, (state) => onSocketOpened(state)),
  on(closeSocket, (state) => onCloseSocket(state)),
  on(socketClosed, (state) => onSocketClosed(state)),
  on(getData, (state, props) => onGetData(state, props))
);

const onOpenSocket = (state: StationState) => ({
  ...state,
});

const onSocketOpened = (state: StationState) => ({
  ...state,
});

const onCloseSocket = (state: StationState) => ({
  ...state,
});

const onSocketClosed = (state: StationState) => ({
  ...state,
});

const onGetData = (state: StationState, props: { station: StationState }) => ({
  ...state,
  lifebit: props.station.lifebit,
  alarm: props.station.alarm,
  module: props.station.module,
});
