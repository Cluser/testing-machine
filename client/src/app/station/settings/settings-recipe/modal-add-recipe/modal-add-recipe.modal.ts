import { Component } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";

@Component({
  selector: "app-modal-add-recipe",
  templateUrl: "modal-add-recipe.component.html",
  styleUrls: ["./modal-add-recipe.component.scss"],
})
export class ModalAddRecipeComponent extends SimpleModalComponent<null, string> {
  constructor() {
    super();
  }

  ngOnInit() {}

  public confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = "test";
    this.close();
  }
}
