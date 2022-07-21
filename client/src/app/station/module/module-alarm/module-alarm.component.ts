import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectRouteParams } from "src/app/core/store/router";
import { getAlarmsProcess, getAlarmsModule } from "src/app/core/store/selectors";
import { IAppState } from "src/app/core/store/states";
import { ApiService } from "src/app/shared/api/api.service";

@Component({
  selector: "app-module-alarm",
  templateUrl: "./module-alarm.component.html",
  styleUrls: ["./module-alarm.component.scss"],
})
export class ModuleAlarmComponent implements OnInit {
  public alarmsModuleList: string[] = [
    "100 00: Przycisk E-Stop został wciśnięty (S120)",
    "100 01: Rygiel osłony niezamknięty (S110)",
    "100 02: Wentylator silnika nie załączył się (K103)",
    "100 03: Silnik pompy nie załączył się (K104)",
    "100 04: Pompa smarowania nie załączyła się (K105)",
    "100 05: Zabezpieczenie nadprądowe silnika (Q101)",
    "100 06: Nieprawidłowe ciśnienie napięcia paska (B010A2)",
    "100 07: Nieprawidłowe ciśnienie pompy oleju (A105)",
    "100 08: Nieprawidłowy poziom oleju (A105)",
    "100 09: Brak komunikacji z MES",
    "100 10: Brak komuniaktu",
    "100 11: Brak komuniaktu",
    "100 12: Brak komuniaktu",
    "100 13: Brak komuniaktu",
    "100 14: Brak komuniaktu",
    "100 15: Brak komuniaktu",
    "100 16: Brak komuniaktu",
    "100 17: Brak komuniaktu",
    "100 18: Brak komuniaktu",
    "100 19: Brak komuniaktu",
  ];

  public alarmsProcessList: string[] = [
    "101 00: Siłownik dojazdu silnika Z101 nie dojechał do pozycji bazowej (B010A2_0)",
    "101 01: Siłownik dojazdu silnika Z101 nie dojechał do pozycji pracy (B010A2_1)",
    "101 02: Siłownik dojazdu silnika Z101 - błąd pozycji (B010A2_0 / B010A2_1)",
    "101 03: Brak komuniaktu",
    "101 04: Brak komuniaktu",
    "101 05: Brak komuniaktu",
    "101 06: Brak komuniaktu",
    "101 07: Brak komuniaktu",
    "101 08: Brak komuniaktu",
    "101 09: Brak komuniaktu",
    "101 10: Brak komuniaktu",
    "101 11: Brak komuniaktu",
    "101 12: Brak komuniaktu",
    "101 13: Brak komuniaktu",
    "101 14: Brak komuniaktu",
    "101 15: Brak komuniaktu",
    "101 16: Brak komuniaktu",
    "101 17: Brak komuniaktu",
    "101 18: Brak komuniaktu",
    "101 19: Brak komuniaktu",
  ];

  public alarmsModule: string[] = [];
  public alarmsProcess: string[] = [];
  public selectedModule = 0;

  constructor(private store: Store<IAppState>, private apiService: ApiService) {}

  ngOnInit(): void {
    this.store.select(selectRouteParams).subscribe((params) => (this.selectedModule = Number(params["id"])));

    this.getAlarms();
  }

  public getAlarms() {
    this.store.select(getAlarmsModule).subscribe((alarms) => {
      this.alarmsModule = [];
      alarms?.forEach((alarm, idx) => {
        if (alarm === true) {
          this.alarmsModule.push(this.alarmsModuleList[idx]);
        }
      });
    });

    this.store.select(getAlarmsProcess).subscribe((alarms) => {
      this.alarmsProcess = [];
      alarms?.forEach((alarm, idx) => {
        if (alarm === true) {
          this.alarmsProcess.push(this.alarmsProcessList[idx]);
        }
      });
    });
  }

  public resetAlarms() {
    this.apiService.plc.reset(this.selectedModule).subscribe();
  }
}
