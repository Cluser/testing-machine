import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-module-sequence",
  templateUrl: "./module-sequence.component.html",
  styleUrls: ["./module-sequence.component.scss"],
})
export class ModuleSequenceComponent implements OnInit {
  public selectedSequence: string = "grinding";
  public columnDefs: ColDef[] = [{ field: "step" }, { field: "velocity" }, { field: "stepTime" }, { field: "oilFogTon" }, { field: "oilFogTof" }];

  public rowData = [
    { step: 1, velocity: "10000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
    { step: 2, velocity: "15000", stepTime: 20, oilFogTon: 21, oilFogTof: 540 },
    { step: 4, velocity: "12000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
    { step: 5, velocity: "10000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
    { step: 6, velocity: "15000", stepTime: 20, oilFogTon: 21, oilFogTof: 540 },
    { step: 7, velocity: "12000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
    { step: 8, velocity: "10000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
    { step: 9, velocity: "15000", stepTime: 20, oilFogTon: 21, oilFogTof: 540 },
    { step: 10, velocity: "12000", stepTime: 10, oilFogTon: 21, oilFogTof: 540 },
  ];
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
