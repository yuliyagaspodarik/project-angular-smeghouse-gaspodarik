import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../products.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    check: new FormControl('')
  });

  constructor(private productsService: ProductsService, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  onSubmit(user) {
    this.productsService.addUser(user);
    this.flashMessages.show('Вы авторизованы', {
      cssClass: 'alert-success',
      timeout: 4000
    });
    this.loginForm.reset();
  }

}
