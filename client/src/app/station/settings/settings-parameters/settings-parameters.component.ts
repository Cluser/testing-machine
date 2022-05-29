import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SimpleModalService } from "ngx-simple-modal";
import { Observable, Subscription } from "rxjs";
import { changeRecipeName, changeRecipeTemperatureLimit, getRecipeEditName, getRecipeEditTemperatureLimit, saveRecipe } from "src/app/core/store/recipe";
import { IAppState } from "src/app/core/store/states";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";

@Component({
  selector: "app-settings-parameters",
  templateUrl: "./settings-parameters.component.html",
  styleUrls: ["./settings-parameters.component.scss"],
})
export class SettingsParametersComponent implements OnInit {
  private subscriptions = new Subscription();

  public name?: string;
  public temperatureLimit?: number;

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const name$: Observable<any> = this.store.select(getRecipeEditName);
    const temperatureLimit$: Observable<any> = this.store.select(getRecipeEditTemperatureLimit);

    this.subscriptions.add(
      name$.subscribe((name: string) => {
        this.name = name;
      })
    );

    this.subscriptions.add(
      temperatureLimit$.subscribe((temperatureLimit: number) => {
        console.log(temperatureLimit);
        this.temperatureLimit = temperatureLimit;
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  public changeRecipeName(name: string) {
    this.store.dispatch(changeRecipeName({ name: name }));
  }

  public changeRecipeTemperatureLimit(temperatureLimit: number) {
    this.store.dispatch(changeRecipeTemperatureLimit({ temperatureLimit: temperatureLimit }));
  }

  public saveRecipe(): void {
    this.simpleModalService.addModal(ModalConfirmComponent, { title: "Zapisywanie referencji", message: "Czy na pewno chcesz zapisać referencję " + this.name + "?" }).subscribe((isConfirmed) => {
      if (isConfirmed) this.store.dispatch(saveRecipe());
    });
  }
}
