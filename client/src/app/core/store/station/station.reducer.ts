import { createReducer, on, props } from "@ngrx/store";
import { closeSocket, getStationData, openSocket, socketClosed, socketOpened } from "./station.actions";
import { IStationState, initialState } from "./station.state";

export const stationReducer = createReducer(
  initialState,
  on(openSocket, (state) => onOpenSocket(state)),
  on(socketOpened, (state) => onSocketOpened(state)),
  on(closeSocket, (state) => onCloseSocket(state)),
  on(socketClosed, (state) => onSocketClosed(state)),
  on(getStationData, (state, props) => onGetStationData(state, props))
);

const onOpenSocket = (state: IStationState) => ({
  ...state,
});

const onSocketOpened = (state: IStationState) => ({
  ...state,
});

const onCloseSocket = (state: IStationState) => ({
  ...state,
});

const onSocketClosed = (state: IStationState) => ({
  ...state,
});

const onGetStationData = (state: IStationState, props: { station: IStationState }) => ({
  ...state,
  lifebit: props.station.lifebit,
  alarm: props.station.alarm,
  timestamp: props.station.timestamp,
  module: props.station.module,
});
