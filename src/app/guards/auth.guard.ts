import { AngularFireAuth } from "@angular/fire/auth";
import { CanLoad, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import {ProductsService} from "../core/products.service";


@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private productsService: ProductsService
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
          //this.productsService.getUserProducts(auth.uid);
          this.router.navigate(['/']);
          return true;
        }
      })
    )
  }
}
