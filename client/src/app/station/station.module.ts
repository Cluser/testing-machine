import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StationComponent } from "./station.component";
import { StationRoutingModule } from "./station-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { ModuleComponent } from "./module/module.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ModuleChartComponent } from "./module/module-chart/module-chart.component";
import { ModuleMeasurementsComponent } from "./module/module-measurements/module-measurements.component";

@NgModule({
  declarations: [StationComponent, MenuComponent, ModuleComponent, ModuleChartComponent, ModuleMeasurementsComponent],
  imports: [CommonModule, StationRoutingModule, NgxChartsModule],
})
export class StationModule {}
