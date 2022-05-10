import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IRecipeState } from "src/app/core/store/states";
import { getRecipes, getRecipesData } from "src/app/core/store/recipe";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-module-recipe",
  templateUrl: "./module-recipe.component.html",
  styleUrls: ["./module-recipe.component.scss"],
})
export class ModuleRecipeComponent implements OnInit {
  private subscriptions = new Subscription();
  public recipeState: IRecipeState = { recipeEdit: {}, recipe: [] };

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
    this.subscriptions.add(
      recipes$.subscribe((recipeState: IRecipeState) => {
        this.recipeState = recipeState;
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
    // this.store.dispatch(changeEditRecipe({ recipeEdit: recipe }));
  }

  public compareFn(optionOne: any, optionTwo: any): boolean {
    return optionOne?._id === optionTwo?._id;
  }
}
