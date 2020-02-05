import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "@angular/fire";
// import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { TableComponent } from "./pages/table/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MusicService } from "./services/music.service";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [MusicService, AuthService]
})
export class AdminModule {}
