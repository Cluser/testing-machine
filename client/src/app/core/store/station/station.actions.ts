import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Station] Increment");
export const decrement = createAction("[Station] Decrement");
export const reset = createAction("[Station] Reset");
export const changeStep = createAction("[Station] Change step", props<{ step: number }>());
export const getData = createAction("[Station] Get data");

export const openSocket = createAction("[Station] Open socket");
export const closeSocket = createAction("[Station] Close socket");
