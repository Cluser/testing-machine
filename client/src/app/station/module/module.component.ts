import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getModule } from "src/app/core/store/station";
import { IAppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrls: ["./module.component.scss"],
})
export class ModuleComponent implements OnInit {
  private module$: Observable<any>;
  public lineChart: ILineChart = { results: [] };

  constructor(private store: Store<IAppState>) {
    this.module$ = this.store.select(getModule);
  }

  ngOnInit() {
    this.initLineChart();
  }

  private initLineChart() {
    this.lineChart.results.push({ name: "Spindle velocity", series: [] });
    this.module$.subscribe((x) => {
      this.lineChart.results[0].series?.push({ name: "1", value: x.process[0].spindle_velocity });
    });
  }
}
