import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectRouteParams } from "src/app/core/store/router";
import { IAppState } from "src/app/core/store/states";
import { ApiService } from "src/app/shared/api/api.service";
import { DataShareService } from "src/app/shared/services/sequence-type.service";

@Component({
  selector: "app-module-buttons",
  templateUrl: "./module-buttons.component.html",
  styleUrls: ["./module-buttons.component.scss"],
})
export class ModuleButtonsComponent implements OnInit {
  private selectedSequence = "";
  private selectedModule = 0;

  constructor(private dataShare: DataShareService, private apiService: ApiService, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.dataShare.selectedSequence.subscribe((selectedSequence) => (this.selectedSequence = selectedSequence));
    this.store.select(selectRouteParams).subscribe((params) => (this.selectedModule = Number(params["id"])));
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
