export interface IProcessState {
  id: number;
  alarm?: boolean[];
  status?: number;
  spindle_no?: number;
  time_left?: number;
  spindle_velocity: number;
  motor_velocity?: number;
  motor_temperature?: number;
  outside_temperature?: number;
}

export interface IModuleState {
  id: number;
  alarm?: boolean[];
  process: IProcessState[];
}

export interface IStationState {
  lifebit?: boolean;
  alarm?: boolean[];
  module: IModuleState[];
}

export const initialState: IStationState = {
  module: [
    {
      id: 0,
      process: [{ id: 1, spindle_velocity: 199 }],
    },
    {
      id: 1,
      process: [{ id: 1, spindle_velocity: 299 }],
    },
    {
      id: 2,
      process: [{ id: 1, spindle_velocity: 299 }],
    },
  ],
};
