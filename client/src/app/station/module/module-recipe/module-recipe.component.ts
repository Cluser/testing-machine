import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/core/store/states";

@Component({
  selector: "app-module-recipe",
  templateUrl: "./module-recipe.component.html",
  styleUrls: ["./module-recipe.component.scss"],
})
export class ModuleRecipeComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
