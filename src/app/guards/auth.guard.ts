import { Injectable } from '@angular/core';
import {CanLoad, CanActivate, Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from './auth.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private flashMessages: FlashMessagesService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(auth => {
        if (!auth) {
          this.flashMessages.show('Вы не авторизованы', {
            cssClass: 'alert-warning',
            timeout: 4000
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
