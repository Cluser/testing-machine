import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SimpleModalService } from "ngx-simple-modal";
import { addRecipe, changeEditRecipe, getRecipes, getRecipesData, IRecipeState, removeRecipe, saveRecipe } from "src/app/core/store/recipe";
import { IAppState } from "src/app/core/store/states";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";
import { ModalAddRecipeComponent } from "./modal-add-recipe/modal-add-recipe.modal";
import { Observable, Subscription } from "rxjs";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";

@Component({
  selector: "app-settings-recipe",
  templateUrl: "./settings-recipe.component.html",
  styleUrls: ["./settings-recipe.component.scss"],
})
export class SettingsRecipeComponent implements OnInit {
  private subscriptions = new Subscription();
  public recipeState: IRecipeState = { recipeActive: [], recipeEdit: {}, recipe: [] };
  public selected: Partial<IRecipe> = {};

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService) {}

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
        this.selected = { ...recipeState.recipeEdit };
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private getRecipes() {
    this.store.dispatch(getRecipes());
  }

  public openAddRecipeModal(): void {
    this.simpleModalService.addModal(ModalAddRecipeComponent).subscribe((recipe) => {
      this.store.dispatch(addRecipe({ recipe: recipe }));
    });
  }

  public openRemoveModal(): void {
    this.simpleModalService
      .addModal(ModalConfirmComponent, { title: "Usuwanie referencji", message: "Czy na pewno usun???? referencj?? o nazwie " + this.recipeState.recipeEdit.type + "?" })
      .subscribe((isConfirmed) => {
        if (isConfirmed) this.store.dispatch(removeRecipe({ id: this.recipeState.recipeEdit._id! }));
      });
  }

  public onRecipeChange(recipe: any): void {
    this.simpleModalService
      .addModal(ModalConfirmComponent, { title: "Zapisywanie referencji", message: "Czy chcesz zapisa?? obecn?? referencj?? o nazwie " + this.recipeState.recipeEdit.type + "?" })
      .subscribe((isConfirmed) => {
        if (isConfirmed) this.store.dispatch(saveRecipe());
        this.store.dispatch(changeEditRecipe({ recipeEdit: recipe }));
      });
  }

  public compareFn(optionOne: any, optionTwo: any): boolean {
    return optionOne?._id === optionTwo?._id;
  }
}
