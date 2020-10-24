import { CanLoad, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { AuthService } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private flashMessages: FlashMessagesService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(auth => {
        if (!auth) {
          this.flashMessages.show('Вы не авторизованы', {
            cssClass: 'alert-warning',
            timeout: 3000
          });
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    )
  }

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
