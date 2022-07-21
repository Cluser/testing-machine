import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SimpleModalService } from "ngx-simple-modal";
import { Observable, Subscription } from "rxjs";
import {
  changeRecipeType,
  changeRecipeTemperatureLimit,
  getRecipeEditType,
  getRecipeEditTemperatureLimit,
  saveRecipe,
  getRecipeEditIdNumber,
  getRecipeEditVersion,
  changeRecipeIdNumber,
  changeRecipeVersion,
} from "src/app/core/store/recipe";
import { IAppState } from "src/app/core/store/states";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";

@Component({
  selector: "app-settings-parameters",
  templateUrl: "./settings-parameters.component.html",
  styleUrls: ["./settings-parameters.component.scss"],
})
export class SettingsParametersComponent implements OnInit {
  private subscriptions = new Subscription();

  public type?: string;
  public idNumber?: string;
  public version?: string;
  public temperatureLimit?: number;

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const type$: Observable<any> = this.store.select(getRecipeEditType);
    const idNumber$: Observable<any> = this.store.select(getRecipeEditIdNumber);
    const version$: Observable<any> = this.store.select(getRecipeEditVersion);
    const temperatureLimit$: Observable<any> = this.store.select(getRecipeEditTemperatureLimit);

    this.subscriptions.add(
      type$.subscribe((type: string) => {
        this.type = type;
      })
    );

    this.subscriptions.add(
      idNumber$.subscribe((idNumber: string) => {
        this.idNumber = idNumber;
      })
    );

    this.subscriptions.add(
      version$.subscribe((version: string) => {
        this.version = version;
      })
    );

    this.subscriptions.add(
      temperatureLimit$.subscribe((temperatureLimit: number) => {
        this.temperatureLimit = temperatureLimit;
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  public changeRecipeType(type: string) {
    this.store.dispatch(changeRecipeType({ spindleType: type }));
  }

  public changeRecipeIdNumber(idNumber: string) {
    this.store.dispatch(changeRecipeIdNumber({ idNumber: idNumber }));
  }

  public changeRecipeVersion(version: string) {
    this.store.dispatch(changeRecipeVersion({ version: version }));
  }

  public changeRecipeTemperatureLimit(temperatureLimit: number) {
    this.store.dispatch(changeRecipeTemperatureLimit({ temperatureLimit: temperatureLimit }));
  }

  public saveRecipe(): void {
    this.simpleModalService.addModal(ModalConfirmComponent, { title: "Zapisywanie referencji", message: "Czy na pewno chcesz zapisać referencję " + this.type + "?" }).subscribe((isConfirmed) => {
      if (isConfirmed) this.store.dispatch(saveRecipe());
    });
  }
}
