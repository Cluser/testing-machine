import { createAction, props } from "@ngrx/store";
import { ISeries } from "src/app/shared/interfaces/ILineChartResultSerie";

export const addChartData = createAction("[Station Store] Add chart data", props<{ chartData: ISeries[] }>());
