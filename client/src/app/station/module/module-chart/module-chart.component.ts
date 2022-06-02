import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { DatePipe } from "@angular/common";
import { IAppState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";
import { getChartData } from "src/app/core/store/chart";

@Component({
  selector: "app-module-chart",
  templateUrl: "./module-chart.component.html",
  styleUrls: ["./module-chart.component.scss"],
})
export class ModuleChartComponent implements OnInit {
  private subscriptions = new Subscription();
  public lineChart: ILineChart = { results: [{ name: "Spindle velocity", series: [] }] };

  constructor(private store: Store<IAppState>, private datePipe: DatePipe) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const chart$: Observable<ILineChart> = this.store.select(getChartData);
    this.subscriptions.add(chart$.subscribe((chart: ILineChart) => this.onChartUpdate(chart)));
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private onChartUpdate(chart: ILineChart) {
    this.updateLineChart(chart);
  }

  private updateLineChart(chart: ILineChart) {
    this.lineChart = chart;
  }

  public xAxisTickFormatting = (value: any) => this.datePipe.transform(value, "hh:mm:ss");
}
