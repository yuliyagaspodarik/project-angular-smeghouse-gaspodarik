import { Injectable } from "@angular/core";
import { Observable, of} from "rxjs";

@Injectable()
export class AuthService {
  user = { };

  isLoggedIn() {
    return of(true);
  }
}
