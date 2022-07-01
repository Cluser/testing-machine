import { ILineChart } from "src/app/shared/interfaces/ILineChart";

export interface IChartState {
  chart: ILineChart[];
}

export const initialChartState: IChartState = {
  chart: [
    {
      results: [
        { name: "Obroty wrzeciona", series: [] },
        { name: "Obroty silnika", series: [] },
      ],
    },

    {
      results: [
        { name: "Obroty wrzeciona", series: [] },
        { name: "Obroty silnika", series: [] },
      ],
    },

    {
      results: [
        { name: "Obroty wrzeciona", series: [] },
        { name: "Obroty silnika", series: [] },
      ],
    },
  ],
};
