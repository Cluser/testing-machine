import { createReducer, on, props } from "@ngrx/store";
import { changeStep, decrement, increment, reset } from "./station.actions";
import { StationState, initialState } from "./station.state";

export const stationReducer = createReducer(
  initialState, // Definicja stanu początkowego
  on(increment, (state) => onIncrement(state)),
  on(decrement, (state) => onDecrement(state)),
  on(reset, (state) => onReset(state)),
  on(changeStep, (state, props) => onChangeStep(state, props))
);

const onIncrement = (state: StationState) => ({
  ...state,
  value: state.value + state.step,
});

const onDecrement = (state: StationState) => ({
  ...state,
  value: state.value - state.step,
});

const onReset = (state: StationState) => ({
  ...state,
  value: initialState.value,
  step: initialState.step,
});

const onChangeStep = (state: StationState, props: { step: number }) => ({
  ...state,
  step: props.step,
});
