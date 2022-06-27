import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getAlarms } from "src/app/core/store/selectors";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-module-alarm",
  templateUrl: "./module-alarm.component.html",
  styleUrls: ["./module-alarm.component.scss"],
})
export class ModuleAlarmComponent implements OnInit {
  public alarmsList: string[] = [
    "00: Przycisk E-Stop został wciśnięty",
    "01: Brak komuniaktu",
    "02: Brak komuniaktu",
    "03: Brak komuniaktu",
    "04: Brak komuniaktu",
    "05: Brak komuniaktu",
    "06: Brak komuniaktu",
    "07: Brak komuniaktu",
    "08: Brak komuniaktu",
    "09: Brak komuniaktu",
    "10: Brak komuniaktu",
    "11: Brak komuniaktu",
    "12: Brak komuniaktu",
    "13: Brak komuniaktu",
    "14: Brak komuniaktu",
    "15: Brak komuniaktu",
    "16: Brak komuniaktu",
    "17: Brak komuniaktu",
    "18: Brak komuniaktu",
    "19: Brak komuniaktu",
  ];

  public alarms: string[] = [];

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.getAlarms();
  }

  public getAlarms() {
    this.store.select(getAlarms).subscribe((alarms) => {
      this.alarms = [];
      alarms?.forEach((alarm, idx) => {
        if (alarm === true) {
          this.alarms.push(this.alarmsList[idx]);
        }
      });
    });
  }
}
