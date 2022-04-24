import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FileUploadDirective } from "./directives/file-upload.directive";
import { SimpleModalModule } from "ngx-simple-modal";

@NgModule({
  declarations: [FileUploadDirective],
  imports: [CommonModule, SimpleModalModule],
  exports: [FileUploadDirective],
})
export class SharedModule {}
