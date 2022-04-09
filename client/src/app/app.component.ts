import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "./core/store/states";
import { increment } from "./core/store/station/station.actions";
import { getStationValue } from "./core/store/station/station.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public counterValue$: Observable<number>;
  public stepValue: number = 0;

  constructor(private store: Store<AppState>) {
    this.counterValue$ = this.store.select(getStationValue);
  }

  ngOnInit() {}

  public increment() {
    this.store.dispatch(increment());
  }
}
