import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getModule } from "src/app/core/store/station";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { ILineChart } from "src/app/shared/interfaces/ILineChart";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrls: ["./module.component.scss"],
})
export class ModuleComponent implements OnInit {
  private subscriptions = new Subscription();
  public lineChart: ILineChart = { results: [{ name: "Spindle velocity", series: [] }] };

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const module$: Observable<IModuleState> = this.store.select(getModule);
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }
}
