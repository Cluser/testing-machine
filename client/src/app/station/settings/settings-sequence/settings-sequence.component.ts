import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { getRecipeEditSteps } from "src/app/core/store/recipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";
import { GridOptions } from "ag-grid-community";

@Component({
  selector: "app-settings-sequence",
  templateUrl: "./settings-sequence.component.html",
  styleUrls: ["./settings-sequence.component.scss"],
})
export class SettingsSequenceComponent implements OnInit {
  private subscriptions = new Subscription();
  public grid?: GridOptions;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const steps$: Observable<any> = this.store.select(getRecipeEditSteps);
    this.subscriptions.add(
      steps$.subscribe((steps: IRecipeStep[]) => {
        this.grid?.api?.setRowData(steps);
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  public onGridReady(grid: GridOptions) {
    this.grid = grid;
    this.grid?.api?.setColumnDefs([{ field: "step", valueGetter: "node.rowIndex + 1" }, { field: "velocity" }, { field: "time" }, { field: "oilFogTon" }, { field: "oilFogTof" }]);
  }
}
