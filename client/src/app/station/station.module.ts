import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StationComponent } from "./station.component";
import { StationRoutingModule } from "./station-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { ModuleComponent } from "./module/module.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [StationComponent, MenuComponent, ModuleComponent],
  imports: [CommonModule, StationRoutingModule, NgxChartsModule],
})
export class StationModule {}
