import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStation, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ILineChart } from "src/app/shared/interfaces/ILineChars";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public station$: Observable<any>;

  public id: number = 1;

  public lineChart: ILineChart[] = [];

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.station$ = this.store.select(getStation);
    this.station$.subscribe((station) => {
      this.lineChart = [
        {
          name: "Spindle velocity",
          series: [
            {
              value: station.module[0].process[0].spindle_velocity,
              name: "0",
            },
            {
              value: station.module[1].process[0].spindle_velocity,
              name: "1",
            },
          ],
        },
      ];
    });
  }

  ngOnInit() {
    this.checkStationFromUrl();
    this.openSocket();
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
