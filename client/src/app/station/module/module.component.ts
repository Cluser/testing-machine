import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getModule } from "src/app/core/store/station";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrls: ["./module.component.scss"],
})
export class ModuleComponent implements OnInit {
  private subscriptions = new Subscription();
  public lineChart: ILineChart = { results: [{ name: "Spindle velocity", series: [] }] };

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    const module$: Observable<IModuleState> = this.store.select(getModule);
    this.subscriptions.add(module$.subscribe((module: IModuleState) => this.onModuleUpdate(module)));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private onModuleUpdate(module: IModuleState) {
    this.updateLineChart("0", module.process[0].spindle_velocity);
  }

  private updateLineChart(name: string, value: number) {
    const IDX_SPINDLE_VELOCITY_RESULT = 0;
    this.lineChart.results[IDX_SPINDLE_VELOCITY_RESULT].series?.push({ name: name, value: value });
  }
}
