import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  { path: "", pathMatch: "full", component: LandingComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
