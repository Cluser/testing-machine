export interface ProcessState {
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

export interface ModuleState {
  id: number;
  alarm?: boolean[];
  process: ProcessState[];
}

export interface StationState {
  lifebit?: boolean;
  alarm?: boolean[];
  module: ModuleState[];
}

export const initialState: StationState = {
  module: [
    {
      id: 1,
      process: [{ id: 1, spindle_velocity: 199 }],
    },
    {
      id: 2,
      process: [{ id: 1, spindle_velocity: 299 }],
    },
  ],
};
