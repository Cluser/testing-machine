import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FileUploadDirective } from "./directives/file-upload.directive";
import { SimpleModalModule } from "ngx-simple-modal";
import { ModuleStatusPipe } from "./pipes/module-status.pipe";
import { AlarmBlinkDirective } from "./directives/alarm-blink.directive";

@NgModule({
  declarations: [FileUploadDirective, ModuleStatusPipe, AlarmBlinkDirective],
  imports: [CommonModule, SimpleModalModule],
  exports: [FileUploadDirective, ModuleStatusPipe, AlarmBlinkDirective],
  providers: [DatePipe],
})
export class SharedModule {}
