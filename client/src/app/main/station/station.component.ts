import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStation, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";
import { ISeries } from "src/app/shared/interfaces/ILineChartResultSerie";
import { ILineChartResult } from "src/app/shared/interfaces/ILineChartResult";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public station$: Observable<any>;

  public id: number = 1;

  public lineChart: Array<ILineChart> = [{ results: [] }, { results: [] }, { results: [] }];

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.station$ = this.store.select(getStation);
  }

  ngOnInit() {
    this.checkStationFromUrl();
    this.openSocket();

    this.station$.subscribe((station) => {
      station.module.forEach((module: any, idx: number) => {
        let series: ISeries[] = [
          { value: module.process[0].spindle_velocity, name: "0" },
          { value: module.process[0].spindle_velocity, name: "1" },
        ];
        let result: ILineChartResult = { name: "Spindle velocity", series: series };
        this.lineChart[idx].results.push(result);
      });
    });
  }

  public checkStationFromUrl(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
  }

  public openSocket() {
    this.store.dispatch(openSocket());
  }

  public closeSocket() {
    this.store.dispatch(closeSocket());
  }
}
