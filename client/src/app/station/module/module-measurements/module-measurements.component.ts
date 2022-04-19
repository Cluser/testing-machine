import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-module-measurements",
  templateUrl: "./module-measurements.component.html",
  styleUrls: ["./module-measurements.component.scss"],
})
export class ModuleMeasurementsComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}