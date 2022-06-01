import { ILineChart } from "src/app/shared/interfaces/ILineChart";

export interface IChartState {
  chart: ILineChart[];
}

export const initialChartState: IChartState = {
  chart: [
    {
      results: [
        { name: "Spindle velocity", series: [] },
        { name: "Motor temperature", series: [] },
      ],
    },

    {
      results: [
        { name: "Spindle velocity", series: [] },
        { name: "Motor temperature", series: [] },
      ],
    },

    {
      results: [
        { name: "Spindle velocity", series: [] },
        { name: "Motor temperature", series: [] },
      ],
    },
  ],
};
