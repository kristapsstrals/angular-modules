import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent {
  loading: boolean = true;
  loggedIn: boolean = false;

  email = new FormControl("");
  password = new FormControl("");

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.loading = false;

      if (!user) {
        this.loggedIn = false;
        this.router.navigateByUrl("admin/login");
        return;
      }

      this.loggedIn = true;
    });
  }
}
