import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { getModule } from "src/app/core/store/station";

@Component({
  selector: "app-module-info",
  templateUrl: "./module-info.component.html",
  styleUrls: ["./module-info.component.scss"],
})
export class ModuleInfoComponent implements OnInit {
  private subscriptions = new Subscription();
  public module = {};

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
