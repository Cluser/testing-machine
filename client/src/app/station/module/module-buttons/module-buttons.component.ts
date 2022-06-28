import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectRouteParams } from "src/app/core/store/router";
import { IAppState } from "src/app/core/store/states";
import { ApiService } from "src/app/shared/api/api.service";
import { DataShareService } from "src/app/shared/services/sequence-type.service";
import { getAllowGrindingStart, getAllowGrindingStop, getAllowTestStart, getAllowTestStop } from "src/app/core/store/station";

@Component({
  selector: "app-module-buttons",
  templateUrl: "./module-buttons.component.html",
  styleUrls: ["./module-buttons.component.scss"],
})
export class ModuleButtonsComponent implements OnInit {
  public selectedSequence = "";
  private selectedModule = 0;

  public allowGrindingStart: boolean = false;
  public allowGrindingStop: boolean = false;
  public allowTestStart: boolean = false;
  public allowTestStop: boolean = false;

  constructor(private dataShare: DataShareService, private apiService: ApiService, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.dataShare.selectedSequence.subscribe((selectedSequence) => (this.selectedSequence = selectedSequence));
    this.store.select(selectRouteParams).subscribe((params) => (this.selectedModule = Number(params["id"])));

    this.store.select(getAllowGrindingStart).subscribe((allowGrindingStart) => {
      this.allowGrindingStart = allowGrindingStart!;
    });

    this.store.select(getAllowGrindingStop).subscribe((allowGrindingStop) => {
      this.allowGrindingStop = allowGrindingStop!;
    });

    this.store.select(getAllowTestStart).subscribe((allowTestStart) => {
      this.allowTestStart = allowTestStart!;
    });

    this.store.select(getAllowTestStop).subscribe((allowTestStop) => {
      this.allowTestStop = allowTestStop!;
    });
  }

  onStartClick() {
    switch (this.selectedSequence) {
      case "grinding": {
        this.apiService.plc.startGrinding(this.selectedModule).subscribe();
        break;
      }
      case "testing": {
        this.apiService.plc.startTesting(this.selectedModule).subscribe();
        break;
      }
    }
  }

  onStopClick() {
    switch (this.selectedSequence) {
      case "grinding": {
        this.apiService.plc.stopGrinding(this.selectedModule).subscribe();
        break;
      }
      case "testing": {
        this.apiService.plc.stopTesting(this.selectedModule).subscribe();
        break;
      }
    }
  }
}
