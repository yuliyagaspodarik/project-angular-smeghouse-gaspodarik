import { Component, OnInit } from '@angular/core';

import { Contacts } from "../models/products.interface";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacts: Contacts[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.contacts = this.productsService.getContacts();
  }
}
