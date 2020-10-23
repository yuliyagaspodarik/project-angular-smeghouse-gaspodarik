import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}

  canLoad() {
    return this.authService.isLoggedIn();
  }

  canActivate() {
    return this.authService.isLoggedIn();
  }

}
