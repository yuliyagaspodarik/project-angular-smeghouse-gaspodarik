import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";

import { Products } from "../models/products.interface";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockProducts: Products[] = [];
  totalPrice: number = 0;

  constructor(private productsService: ProductsService, private flashMessages: FlashMessagesService) {}

  ngOnInit(): void {
    this.stockProducts = this.productsService.getStockProducts();
    this.totalPrice = this.productsService.getStockTotalPrice();
  }

  removeProduct(i) {
    this.productsService.removeStockProduct(i);
    this.productsService.stockValue.next(this.stockProducts.length);
    this.totalPrice = this.productsService.getStockTotalPrice();
    this.flashMessages.show('Товар удален из корзины', {
      cssClass: 'alert-primary',
      timeout: 2000
    })
  }
}
