import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { SimpleModalComponent } from "ngx-simple-modal";
import { IRecipe } from "src/app/shared/interfaces/IRecipe";

@Component({
  selector: "app-modal-add-recipe",
  templateUrl: "modal-add-recipe.component.html",
  styleUrls: ["./modal-add-recipe.component.scss"],
})
export class ModalAddRecipeComponent extends SimpleModalComponent<null, IRecipe> {
  public form = this.formBuilder.group({
    recipeName: ["", [Validators.minLength(2), Validators.maxLength(20), Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {}

  public onSubmit() {
    const recipe: IRecipe = { name: this.form.value.recipeName, step: [] };
    this.result = recipe;
    this.close();
  }

  public updateProfile(): void {
    this.form.patchValue({
      firstName: "Ex",
      lastName: "ample",
    });
  }
}
