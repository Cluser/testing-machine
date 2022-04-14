import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-module-sequence",
  templateUrl: "./module-sequence.component.html",
  styleUrls: ["./module-sequence.component.scss"],
})
export class ModuleSequenceComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
