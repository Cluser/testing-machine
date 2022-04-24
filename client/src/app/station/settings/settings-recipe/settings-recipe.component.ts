import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SimpleModalService } from "ngx-simple-modal";
import { addRecipe, getRecipes, getRecipesData, IRecipeState, removeRecipe } from "src/app/core/store/recipe";
import { IAppState } from "src/app/core/store/states";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";
import { ModalAddRecipeComponent } from "./modal-add-recipe/modal-add-recipe.modal";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-settings-recipe",
  templateUrl: "./settings-recipe.component.html",
  styleUrls: ["./settings-recipe.component.scss"],
})
export class SettingsRecipeComponent implements OnInit {
  private subscriptions = new Subscription();

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions() {
    const recipes$: Observable<IRecipeState> = this.store.select(getRecipesData);
    this.subscriptions.add(
      recipes$.subscribe((recipes: IRecipeState) => {
        console.log(recipes);
      })
    );
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  public openAddRecipeModal(): void {
    this.simpleModalService.addModal(ModalAddRecipeComponent).subscribe((recipe) => {
      this.store.dispatch(addRecipe({ recipe: recipe }));
    });
  }

  public openRemoveModal(): void {
    this.simpleModalService
      .addModal(ModalConfirmComponent, {
        title: "Usuwanie referencji",
        message: "Czy na pewno usunąć wybraną referencję?",
      })
      .subscribe((isConfirmed) => {
        // if (isConfirmed) this.store.dispatch(removeRecipe({ recipe: recipe }));
      });
  }
}
