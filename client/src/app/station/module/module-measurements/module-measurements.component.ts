import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IModuleState } from "src/app/core/store/states";
import { getModule } from "src/app/core/store/station";

@Component({
  selector: "app-module-measurements",
  templateUrl: "./module-measurements.component.html",
  styleUrls: ["./module-measurements.component.scss"],
})
export class ModuleMeasurementsComponent implements OnInit {
  public module: Partial<IModuleState> = {};

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.select(getModule).subscribe((module: IModuleState) => (this.module = module));
  }
}
