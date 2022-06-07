import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FileUploadDirective } from "./directives/file-upload.directive";
import { SimpleModalModule } from "ngx-simple-modal";
import { ModuleStatusPipe } from "./pipes/module-status.pipe";

@NgModule({
  declarations: [FileUploadDirective, ModuleStatusPipe],
  imports: [CommonModule, SimpleModalModule],
  exports: [FileUploadDirective, ModuleStatusPipe],
  providers: [DatePipe],
})
export class SharedModule {}
