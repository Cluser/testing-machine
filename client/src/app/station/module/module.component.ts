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
  private module$: Observable<IModuleState>;
  private moduleSub$: Subscription;
  public lineChart: ILineChart = { results: [{ name: "Spindle velocity", series: [] }] };

  constructor(private store: Store<IAppState>) {
    this.module$ = this.store.select(getModule);
    this.moduleSub$ = this.module$.subscribe((module) => {
      this.updateLineChart("0", module.process[0].spindle_velocity);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.moduleSub$.unsubscribe();
  }

  private updateLineChart(name: string, value: number) {
    this.lineChart.results[0].series?.push({ name: name, value: value });
  }
}
