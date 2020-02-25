import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import User from "src/app/models/user";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
  styleUrls: ["./admin-navbar.component.scss"]
})
export class AdminNavbarComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (!user) {
        console.log("Not logged in");
        return;
      }

      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}
