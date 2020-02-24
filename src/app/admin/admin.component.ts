import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { AuthService } from "./services/auth.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public loading = true;
  loggedIn: boolean = false;
  user: any;

  email = new FormControl("");
  password = new FormControl("");

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.loading = false;

      if (!user) {
        console.log("Not logged in");
        this.loggedIn = false;
        this.router.navigateByUrl("admin/login");
        return;
      }

      this.loggedIn = true;
      this.user = user;
      console.log(user);
    });
  }

  logout() {
    this.authService.logout();
  }
}
