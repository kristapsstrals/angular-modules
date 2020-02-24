import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TableComponent } from "./pages/table/table.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "login", component: LoginComponent },
      { path: "table", component: TableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
