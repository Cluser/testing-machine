import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";
import { ColDef } from "ag-grid-community";
import { getRecipeActive } from "src/app/core/store/recipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";

@Component({
  selector: "app-module-sequence",
  templateUrl: "./module-sequence.component.html",
  styleUrls: ["./module-sequence.component.scss"],
})
export class ModuleSequenceComponent implements OnInit {
  public selectedSequence: string = "grinding";
  public columnDefs: ColDef[] = [{ field: "step", valueGetter: "node.rowIndex + 1" }, { field: "velocity" }, { field: "time" }, { field: "oilFogTon" }, { field: "oilFogTof" }];

  public rowData: IRecipeStep[] = [];

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.select(getRecipeActive).subscribe((recipe) => (this.rowData = recipe.steps!));
  }

  ngOnDestroy() {}
}
