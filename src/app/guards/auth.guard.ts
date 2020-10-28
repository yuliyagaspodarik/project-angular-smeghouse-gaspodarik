import { AngularFireAuth } from "@angular/fire/auth";
import { CanLoad, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {}

  canLoad(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(auth => {
        if (!auth) {
          this.flashMessages.show('Вы не авторизованы', {
            cssClass: 'alert-warning',
            timeout: 2000
          });
          this.router.navigate(['/login']);
          return false;
        } else {
          this.router.navigate(['/']);
          return true;
        }
      })
    )
  }
}
