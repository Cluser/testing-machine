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
import { SettingsComponent } from "./settings/settings.component";
import { SettingsSequenceComponent } from "./settings/settings-sequence/settings-sequence.component";
import { SettingsImageComponent } from "./settings/settings-image/settings-image.component";
import { SettingsParametersComponent } from "./settings/settings-parameters/settings-parameters.component";
import { SettingsRecipeComponent } from "./settings/settings-recipe/settings-recipe.component";
import { FileUploadDirective } from "../shared/directives/file-upload.directive";

@NgModule({
  declarations: [
    StationComponent,
    MenuComponent,
    ModuleComponent,
    ModuleChartComponent,
    ModuleMeasurementsComponent,
    ModuleRecipeComponent,
    ModuleSequenceComponent,
    ModuleInfoComponent,
    SettingsComponent,
    SettingsSequenceComponent,
    SettingsImageComponent,
    SettingsParametersComponent,
    SettingsRecipeComponent,
    FileUploadDirective,
  ],
  imports: [CommonModule, StationRoutingModule, NgxChartsModule, AgGridModule.withComponents([])],
})
export class StationModule {}
