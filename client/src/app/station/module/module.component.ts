import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getModule, getStation, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrls: ["./module.component.scss"],
})
export class ModuleComponent implements OnInit {
  public module$: Observable<any>;
  // public station$: Observable<any>;

  // public id: number = 1;

  public lineChart: ILineChart = { results: [] };

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.module$ = this.store.select(getModule);
  }

  ngOnInit() {
    // this.module$.subscribe((x) => console.log(x));
    this.initLineChart();
  }

  private initLineChart() {
    this.module$.subscribe((x) => {
      console.log(x);
      this.lineChart.results.push({ name: "Spindle Velocity", series: [{ name: "1", value: x.process[0].spindle_velocity }] });
    });
  }
}
