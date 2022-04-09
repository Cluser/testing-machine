import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStationValue, increment, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public counterValue$: Observable<number>;
  public stepValue: number = 0;
  public id: number = 1;
  public msg: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.counterValue$ = this.store.select(getStationValue);
  }

  ngOnInit() {
    this.store.dispatch(openSocket());
    this.checkStationFromUrl();
  }

  public checkStationFromUrl(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      console.log(this.id);
    });
  }

  public increment() {
    this.store.dispatch(increment());
    this.store.dispatch(closeSocket());
  }
}
