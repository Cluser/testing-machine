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
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalAddRecipeComponent } from "./settings/settings-recipe/modal-add-recipe/modal-add-recipe.modal";
import { ModuleImageComponent } from './module/module-image/module-image.component';
import { ModuleAlarmComponent } from './module/module-alarm/module-alarm.component';
import { ModuleButtonsComponent } from './module/module-buttons/module-buttons.component';

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
    ModalAddRecipeComponent,
    ModuleImageComponent,
    ModuleAlarmComponent,
    ModuleButtonsComponent,
  ],
  imports: [CommonModule, SharedModule, StationRoutingModule, NgxChartsModule, AgGridModule.withComponents([]), FormsModule, ReactiveFormsModule],
})
export class StationModule {}
