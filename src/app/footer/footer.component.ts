import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../core/products.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacts$: Observable<any>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.contacts$ = this.productsService.getContactsFireBase();
  }
}
