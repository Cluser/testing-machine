import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IRecipeState } from "src/app/core/store/states";
import { getRecipes, getRecipesData, setRecipeActive } from "src/app/core/store/recipe";
import { Observable, Subscription } from "rxjs";
import { selectRouteParams } from "src/app/core/store/router";

@Component({
  selector: "app-module-recipe",
  templateUrl: "./module-recipe.component.html",
  styleUrls: ["./module-recipe.component.scss"],
})
export class ModuleRecipeComponent implements OnInit {
  private subscriptions = new Subscription();
  public idModule: number = 0;
  public recipeState: IRecipeState = { recipeActive: [], recipeEdit: {}, recipe: [] };

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initSubscriptions();
    this.getRecipes();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const recipes$: Observable<IRecipeState> = this.store.select(getRecipesData);
    const routeParams$: Observable<any> = this.store.select(selectRouteParams);

    this.subscriptions.add(
      recipes$.subscribe((recipeState: IRecipeState) => {
        this.recipeState = recipeState;
      })
    );

    this.subscriptions.add(
      routeParams$.subscribe((params: any) => {
        this.idModule = Number(params.id);
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private getRecipes() {
    this.store.dispatch(getRecipes());
  }

  public onRecipeChange(recipe: any): void {
    this.store.dispatch(setRecipeActive({ idModule: this.idModule, recipe }));
  }

  public compareFn(optionOne: any, optionTwo: any): boolean {
    return optionOne?._id === optionTwo?._id;
  }
}
