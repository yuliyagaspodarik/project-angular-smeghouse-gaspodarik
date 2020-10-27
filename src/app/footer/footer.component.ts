import { Component, OnInit } from '@angular/core';

import { Contacts } from "../models/products.interface";
import { ProductsService } from "../core/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacts$: Observable<any>;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.contacts$ = this.productsService.getContactsFireBase();
  }
}
