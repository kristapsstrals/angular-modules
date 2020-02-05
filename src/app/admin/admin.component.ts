import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { AuthService } from "./services/auth.service";
import { FormControl } from "@angular/forms";

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.loading = false;

      if (!user) {
        console.log("Not logged in");
        this.loggedIn = false;
        return;
      }

      this.loggedIn = true;
      this.user = user;
      console.log(user);
    });
  }

  login() {
    this.authService.login(this.email.value, this.password.value);
  }

  logout() {
    this.authService.logout();
  }
}
