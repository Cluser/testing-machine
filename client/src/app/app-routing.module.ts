import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "prefix" },
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
