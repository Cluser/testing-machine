export interface IProcessState {
  id: number;
  alarm?: boolean[];
  status?: number;
  spindle_no?: string;
  time_left?: number;
  spindle_velocity: number;
  motor_velocity?: number;
  motor_temperature?: number;
  outside_temperature?: number;
  allow_recipe_change?: boolean;
  allow_grinding_start?: boolean;
  allow_grinding_stop?: boolean;
  allow_test_start?: boolean;
  allow_test_stop?: boolean;
}

export interface IModuleState {
  id: number;
  alarm?: boolean[];
  process: IProcessState[];
}

export interface IStationState {
  lifebit?: boolean;
  alarm?: boolean[];
  timestamp: number;
  module: IModuleState[];
}

export const initialState: IStationState = {
  timestamp: 100,
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
