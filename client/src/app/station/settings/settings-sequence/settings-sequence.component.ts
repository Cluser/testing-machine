import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";

@Component({
  selector: "app-settings-sequence",
  templateUrl: "./settings-sequence.component.html",
  styleUrls: ["./settings-sequence.component.scss"],
})
export class SettingsSequenceComponent implements OnInit {
  public columnDefs: ColDef[] = [{ field: "step" }, { field: "velocity" }, { field: "stepTime" }, { field: "oilFogTon" }, { field: "oilFogTof" }];

  public rowData = [
    { step: 1, velocity: "10000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 2, velocity: "15000", stepTime: 20, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 4, velocity: "12000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 5, velocity: "10000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 6, velocity: "15000", stepTime: 20, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 7, velocity: "12000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 8, velocity: "10000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 9, velocity: "15000", stepTime: 20, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
    { step: 10, velocity: "12000", stepTime: 10, temperature1: true, temperature2: true, temperatureLimit: 40, oilFogTon: 21, oilFogTof: 540 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
