import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-module-info",
  templateUrl: "./module-info.component.html",
  styleUrls: ["./module-info.component.scss"],
})
export class ModuleInfoComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
