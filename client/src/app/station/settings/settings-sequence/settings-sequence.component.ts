import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { addRecipeStep, changeStepValue, getRecipeEditSteps, removeRecipeStep } from "src/app/core/store/recipe";
import { IRecipeStep } from "src/app/shared/interfaces/IRecipeStep";
import { CellEditRequestEvent, GridOptions } from "ag-grid-community";
import { SimpleModalService } from "ngx-simple-modal";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";

@Component({
  selector: "app-settings-sequence",
  templateUrl: "./settings-sequence.component.html",
  styleUrls: ["./settings-sequence.component.scss"],
})
export class SettingsSequenceComponent implements OnInit {
  private subscriptions = new Subscription();
  public grid?: GridOptions;

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions(): void {
    const steps$: Observable<any> = this.store.select(getRecipeEditSteps);
    this.subscriptions.add(
      steps$.subscribe((steps: IRecipeStep[]) => {
        this.grid?.api?.setRowData(steps);
      })
    );
  }

  private closeSubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  public onGridReady(grid: GridOptions): void {
    this.grid = grid;
    this.grid?.api?.setColumnDefs([
      { field: "step", valueGetter: "node.rowIndex + 1" },
      { field: "velocity", editable: true },
      { field: "time", editable: true },
      { field: "oilFogTon", editable: true },
      { field: "oilFogTof", editable: true },
    ]);

    this.initSubscriptions();
  }

  public addStep(): void {
    this.store.dispatch(addRecipeStep({ step: { velocity: 0, time: 0, oilFogTof: 0, oilFogTon: 0 } }));
  }

  public removeStep(): void {
    this.simpleModalService.addModal(ModalConfirmComponent, { title: "Usuwanie kroku", message: "Czy na pewno chcesz usunąć wybrany krok?" }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        const selectedRows = this.grid?.api?.getSelectedRows();
        this.grid?.api?.applyTransaction({ remove: selectedRows });
        this.store.dispatch(removeRecipeStep({ step: this.getAllRows() }));
      }
    });
  }

  private getAllRows(): any {
    let rowData: any = [];
    this.grid?.api?.forEachNode((node) => rowData.push(node.data));
    return rowData;
  }

  public onCellEditRequest(event: CellEditRequestEvent): void {
    this.store.dispatch(changeStepValue({ id: event.node.id!, property: event.colDef.field!, value: event.newValue }));
  }
}
