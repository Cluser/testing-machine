import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "station/module/1", pathMatch: "prefix" },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "station",
    loadChildren: () => import("./station/station.module").then((m) => m.StationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
