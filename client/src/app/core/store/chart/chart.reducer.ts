import { createReducer, on } from "@ngrx/store";
import { addChartData } from "./chart.actions";
import { IChartState, initialChartState } from "./chart.state";
import { ISeries } from "src/app/shared/interfaces/ILineChartResultSerie";

const chartMaxRecords: number = 600;

export const chartReducer = createReducer(
  initialChartState,
  on(addChartData, (state, props) => onAddChartData(state, props))
);

const onAddChartData = (state: IChartState, props: { chartData: ISeries[] }) => ({
  ...state,
  chart: [
    {
      ...state.chart[0],
      results: [
        { ...state.chart[0].results[0], series: state.chart[0].results[0].series?.slice(-chartMaxRecords).concat(props.chartData[0]) },
        { ...state.chart[0].results[1], series: state.chart[0].results[1].series?.slice(-chartMaxRecords).concat(props.chartData[3]) },
      ],
    },

    {
      ...state.chart[1],
      results: [
        { ...state.chart[1].results[0], series: state.chart[1].results[0].series?.slice(-chartMaxRecords).concat(props.chartData[1]) },
        { ...state.chart[1].results[1], series: state.chart[1].results[1].series?.slice(-chartMaxRecords).concat(props.chartData[4]) },
      ],
    },

    {
      ...state.chart[2],
      results: [
        { ...state.chart[2].results[0], series: state.chart[2].results[0].series?.slice(-chartMaxRecords).concat(props.chartData[2]) },
        { ...state.chart[2].results[1], series: state.chart[2].results[1].series?.slice(-chartMaxRecords).concat(props.chartData[5]) },
      ],
    },
  ],
});
