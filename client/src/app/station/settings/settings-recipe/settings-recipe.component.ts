import { Component, OnInit } from "@angular/core";
import { SimpleModalService } from "ngx-simple-modal";
import { ModalConfirmComponent } from "src/app/shared/modals/modal-confirm/modal-confirm.modal";
import { ModalAddRecipeComponent } from "./modal-add-recipe/modal-add-recipe.modal";

@Component({
  selector: "app-settings-recipe",
  templateUrl: "./settings-recipe.component.html",
  styleUrls: ["./settings-recipe.component.scss"],
})
export class SettingsRecipeComponent implements OnInit {
  constructor(private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {}

  public openAddRecipeModal(): void {
    this.simpleModalService.addModal(ModalAddRecipeComponent).subscribe((recipe) => {
      console.log(recipe);
    });
  }

  public openRemoveModal(): void {
    this.simpleModalService
      .addModal(ModalConfirmComponent, {
        title: "Usuwanie referencji",
        message: "Czy na pewno usunąć referencję?",
      })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        } else {
        }
      });
  }
}
