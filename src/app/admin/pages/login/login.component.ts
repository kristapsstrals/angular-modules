import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email = new FormControl("");
  password = new FormControl("");

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  async login() {
    var creds = await this.authService.login(
      this.email.value,
      this.password.value
    );
    console.log(creds);
  }

  logout() {
    this.authService.logout();
  }
}
