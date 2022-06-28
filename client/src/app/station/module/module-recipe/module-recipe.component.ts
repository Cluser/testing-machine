import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState, IRecipeState } from "src/app/core/store/states";
import { getRecipes, getRecipesData, setRecipeActive } from "src/app/core/store/recipe";
import { selectRouteParams } from "src/app/core/store/router";
import { getAllowRecipeChangeStatus } from "src/app/core/store/station";

@Component({
  selector: "app-module-recipe",
  templateUrl: "./module-recipe.component.html",
  styleUrls: ["./module-recipe.component.scss"],
})
export class ModuleRecipeComponent implements OnInit {
  public idModule: number = 0;
  public recipeState: IRecipeState = { recipeActive: [], recipeEdit: {}, recipe: [] };
  public allowRecipeChangeStatus: boolean = false;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.select(getRecipesData).subscribe((recipeState: IRecipeState) => {
      this.recipeState = recipeState;
    });
    this.store.select(selectRouteParams).subscribe((params: any) => {
      this.idModule = Number(params.id);
    });
    this.store.select(getAllowRecipeChangeStatus).subscribe((allowRecipeChangeStatus) => {
      this.allowRecipeChangeStatus = allowRecipeChangeStatus!;
    });
    this.getRecipes();
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
