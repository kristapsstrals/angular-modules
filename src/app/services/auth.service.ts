import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth as firebaseAuth } from "firebase/app";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import User from "../models/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  auth: firebase.auth.Auth;
  public user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.auth = afAuth.auth;

    this.user = afAuth.authState.pipe(
      map(user => {
        if (!user) return null;

        return {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoUrl: user.photoURL,
          uid: user.uid
        };
      })
    );
  }

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl("admin");
    } catch (error) {
      throw error;
    }
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl("admin/login");
  }
}
