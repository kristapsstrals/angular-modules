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
import { LayoutModule } from "@angular/cdk/layout";
import { TableComponent } from "./pages/table/table.component";
import { MusicService } from "../services/music.service";
import { AuthService } from "../services/auth.service";
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent,
    ProfileComponent,
    SidenavComponent,
    AdminNavbarComponent
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
    LayoutModule,
    MaterialModule
  ],
  providers: [MusicService, AuthService]
})
export class AdminModule {}
