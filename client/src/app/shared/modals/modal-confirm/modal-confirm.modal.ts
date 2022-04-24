import { Component } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: "app-modal-confirm",
  templateUrl: "modal-confirm.component.html",
  styleUrls: ["./modal-confirm.component.scss"],
})
export class ModalConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  public title: string = "";
  public message: string = "";

  constructor() {
    super();
  }

  ngOnInit() {}

  public confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
