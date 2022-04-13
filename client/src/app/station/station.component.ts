import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStation, openSocket } from "src/app/core/store/station";
import { AppState } from "src/app/core/store/states";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  public station$: Observable<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.station$ = this.store.select(getStation);
  }

  ngOnInit() {
    this.openSocket();
    this.station$.subscribe((station) => {});
  }

  public openSocket() {
    this.store.dispatch(openSocket());
  }

  public closeSocket() {
    this.store.dispatch(closeSocket());
  }
}
