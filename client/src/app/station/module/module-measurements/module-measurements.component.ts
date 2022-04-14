import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getModule } from "src/app/core/store/station";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";

@Component({
  selector: "app-module-measurements",
  templateUrl: "./module-measurements.component.html",
  styleUrls: ["./module-measurements.component.scss"],
})
export class ModuleMeasurementsComponent implements OnInit {
  private subscriptions = new Subscription();
  public lineChart: ILineChart = { results: [{ name: "Spindle velocity", series: [] }] };

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const module$: Observable<IModuleState> = this.store.select(getModule);
    this.subscriptions.add(module$.subscribe((module: IModuleState) => this.onModuleUpdate(module)));
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private onModuleUpdate(module: IModuleState) {
    let myDate = new Date();
    this.updateLineChart(myDate.getTime().toString(), module.process[0].spindle_velocity);
  }

  private updateLineChart(name: string, value: number) {
    const IDX_SPINDLE_VELOCITY_RESULT = 0;
    this.lineChart.results[IDX_SPINDLE_VELOCITY_RESULT].series?.push({ name: name, value: value });
    this.lineChart.results = [...this.lineChart.results];
  }
}
