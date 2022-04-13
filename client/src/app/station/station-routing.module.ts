import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StationComponent } from "./station.component";
import { ModuleComponent } from "./module/module.component";

const routes: Routes = [
  {
    path: "",
    component: StationComponent,
    children: [{ path: "module/:id", component: ModuleComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationRoutingModule {}
