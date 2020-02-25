import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email = new FormControl("");
  password = new FormControl("");

  loading: boolean = false;
  error: Error = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  async login() {
    try {
      this.error = null;
      this.loading = true;
      await this.authService.login(this.email.value, this.password.value);
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error;
    }
  }

  logout() {
    this.authService.logout();
  }
}
