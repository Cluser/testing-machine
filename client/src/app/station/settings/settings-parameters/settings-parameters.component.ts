import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { getRecipeEditName, getRecipeEditTemperatureLimit } from "src/app/core/store/recipe";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-settings-parameters",
  templateUrl: "./settings-parameters.component.html",
  styleUrls: ["./settings-parameters.component.scss"],
})
export class SettingsParametersComponent implements OnInit {
  private subscriptions = new Subscription();

  public name?: string;
  public temperatureLimit?: number;

  constructor(private store: Store<IAppState>) {}

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
}
