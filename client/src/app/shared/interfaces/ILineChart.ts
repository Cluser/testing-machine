import { ILineChartResult } from "./ILineChartResult";

export interface ILineChart {
  view?: number[];
  legend?: boolean;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  timeline?: boolean;
  results: ILineChartResult[];
}
