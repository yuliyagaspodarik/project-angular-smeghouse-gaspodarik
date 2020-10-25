import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { FlashMessagesService } from "angular2-flash-messages";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    check: new FormControl('')
  });

  constructor(private productsService: ProductsService, private flashMessages: FlashMessagesService) {}

  onSubmit(user) {
    this.productsService.addUser(user);
    window.navigator.vibrate(1000);
    this.flashMessages.show('Вы авторизованы', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.loginForm.reset();
  }
}
