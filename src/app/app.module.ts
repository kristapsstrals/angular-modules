import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LandingComponent } from "./pages/landing/landing.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material/material.module";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
