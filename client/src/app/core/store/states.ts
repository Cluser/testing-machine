import { IStationState } from "./station";
import { IChartState } from "./chart";
import { IRecipeState } from "./recipe";

export * from "./station/station.state";
export * from "./chart/chart.state";
export * from "./recipe/recipe.state";

export interface IAppState {
  stationState: IStationState;
  chartState: IChartState;
  recipeState: IRecipeState;
}
