import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth as firebaseAuth } from "firebase/app";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  auth: firebase.auth.Auth;
  public user: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
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
      let test = await this.auth.signInWithEmailAndPassword(email, password);
    } catch {
      console.error("error signing in");
      debugger;
    }
  }

  logout() {
    this.auth.signOut();
  }
}
