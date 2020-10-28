import { AngularFirestore } from "@angular/fire/firestore";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AuthService } from "../../guards/auth.service";
import { ProductsService } from "../../core/products.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogged: boolean;
  userName: string = '';

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private afs: AngularFirestore
  ) {}

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    check: new FormControl('')
  });

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
        if (auth) {
          this.userLogged = true;
          this.userName = auth.email;
        }
      });
  }

  onSubmit(user) {
    this.authService.login(user.email,user.password)
      .then((res) => {
        console.log('res', res);
        return this.afs.collection('users').doc(res.user.uid).set({
          email: user.email
        });
      })
      .then(() => {
        this.flashMessages.show('Авторизация прошла успешно', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        window.navigator.vibrate(1000);
        //this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('err', err);
        this.flashMessages.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      });
    this.loginForm.reset();
  }

  onRegistration (user) {
    this.authService.register(user.email,user.password)
      .then((res) => {
        console.log('res', res);
        return this.afs.collection('users').doc(res.user.uid).set({
          email: user.email
        });
      })
      .then(() => {
        this.flashMessages.show('Регистрация прошла успешно', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        window.navigator.vibrate(1000);
        //this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('err', err);
        this.flashMessages.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      });
    this.loginForm.reset();
  }

  onLogout() {
    this.authService.logout();
    this.userLogged = false;
    this.flashMessages.show('Вы вышли из своего аккаунта', {
      cssClass: 'alert-primary',
      timeout: 3000
    });
    window.navigator.vibrate(1000);
  }
}
