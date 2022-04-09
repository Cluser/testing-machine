import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { StationComponent } from "./station/station.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [{ path: "station", component: StationComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
