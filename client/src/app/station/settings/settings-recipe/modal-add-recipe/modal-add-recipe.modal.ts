import { Component } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";

@Component({
  selector: "app-modal-add-recipe",
  templateUrl: "modal-add-recipe.component.html",
  styleUrls: ["./modal-add-recipe.component.scss"],
})
export class ModalAddRecipeComponent extends SimpleModalComponent<null, IRecipe> {
  constructor() {
    super();
  }

  ngOnInit() {}

  public confirm() {
    const recipe: IRecipe = { name: "ddd", step: [] };
    this.result = recipe;
    this.close();
  }
}
