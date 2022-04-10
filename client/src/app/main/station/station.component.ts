import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStationState, getStationTime, getStationVelocity, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public stationVelocity$: Observable<number>;
  public stationTime$: Observable<number>;

  public id: number = 1;
  public msg: any;
  multi = [
    {
      name: "Velocity",
      series: [
        {
          name: "0",
          value: 0,
        },
      ],
    },
    {
      name: "Vibration",
      series: [
        {
          name: "0",
          value: 0,
        },
      ],
    },
  ];

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.stationVelocity$ = this.store.select(getStationVelocity);
    this.stationTime$ = this.store.select(getStationTime);

    this.stationVelocity$.subscribe((x) => {
      console.log(x);
      this.multi[0].series.push({ name: x.toString(), value: x });
      this.multi[1].series.push({ name: x.toString(), value: 2 ^ x });
      this.multi = [...this.multi];
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
