import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FileUploadDirective } from "./directives/file-upload.directive";
import { SimpleModalModule } from "ngx-simple-modal";

@NgModule({
  declarations: [FileUploadDirective],
  imports: [CommonModule, SimpleModalModule],
  exports: [FileUploadDirective],
  providers: [DatePipe],
})
export class SharedModule {}
