import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StationComponent } from "./station.component";
import { StationRoutingModule } from "./station-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { ModuleComponent } from "./module/module.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AgGridModule } from "ag-grid-angular";
import { ModuleChartComponent } from "./module/module-chart/module-chart.component";
import { ModuleMeasurementsComponent } from "./module/module-measurements/module-measurements.component";
import { ModuleRecipeComponent } from "./module/module-recipe/module-recipe.component";
import { ModuleSequenceComponent } from "./module/module-sequence/module-sequence.component";
import { ModuleInfoComponent } from "./module/module-info/module-info.component";

@NgModule({
  declarations: [StationComponent, MenuComponent, ModuleComponent, ModuleChartComponent, ModuleMeasurementsComponent, ModuleRecipeComponent, ModuleSequenceComponent, ModuleInfoComponent],
  imports: [CommonModule, StationRoutingModule, NgxChartsModule, AgGridModule.withComponents([])],
})
export class StationModule {}
