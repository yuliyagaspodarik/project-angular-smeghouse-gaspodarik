import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class AuthService {
  isLoggedIn() {
    return of(true);
  }
}
