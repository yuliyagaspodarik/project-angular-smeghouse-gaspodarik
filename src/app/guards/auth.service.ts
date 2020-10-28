import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          userData => resolve(userData),
          err => reject(err)
        );
    });
  }

  register(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(
          userData => resolve(userData),
          err => reject(err)
        );
    });
  }

  logout(): void {
    this.afAuth.signOut();
  }

  getAuth(): Observable<any> {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }
}
