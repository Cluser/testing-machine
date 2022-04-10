import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { StationComponent } from "./station/station.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [MainComponent, MenuComponent, StationComponent],
  imports: [CommonModule, MainRoutingModule, NgxChartsModule],
})
export class MainModule {}
