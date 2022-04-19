import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { getModule } from "src/app/core/store/station";

@Component({
  selector: "app-module-measurements",
  templateUrl: "./module-measurements.component.html",
  styleUrls: ["./module-measurements.component.scss"],
})
export class ModuleMeasurementsComponent implements OnInit {
  private subscriptions = new Subscription();
  public module: Partial<IModuleState> = {};

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const module$: Observable<IModuleState> = this.store.select(getModule);
    this.subscriptions.add(module$.subscribe((module: IModuleState) => (this.module = module)));
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }
}
