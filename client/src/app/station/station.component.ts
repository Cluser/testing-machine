import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStation, openSocket } from "src/app/core/store/station";
import { IAppState, IStationState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { initRecipes } from "../core/store/recipe";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.initSubscriptions();
    this.openSocket();
    this.initRecipes();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
    this.closeSocket();
  }

  private initSubscriptions() {
    const station$: Observable<IStationState> = this.store.select(getStation);
    this.subscriptions.add(station$.subscribe((station: IStationState) => {}));
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private openSocket() {
    this.store.dispatch(openSocket());
  }

  private closeSocket() {
    this.store.dispatch(closeSocket());
  }

  private initRecipes() {
    this.store.dispatch(initRecipes());
  }
}
