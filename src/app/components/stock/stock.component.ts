import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Products } from "../../models/products.interface";
import { ProductsService } from "../../core/products.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class StockComponent implements OnInit {
  stockProducts: Products[] = [];
  totalPrice: number = 0;

  constructor(private productsService: ProductsService, private flashMessages: FlashMessagesService) {}

  ngOnInit() {
    this.stockProducts = this.productsService.getStockProducts();
    this.totalPrice = this.productsService.getStockTotalPrice();
  }

  removeProduct(i) {
    this.productsService.removeStockProduct(i);
    this.productsService.stockValue.next(this.stockProducts.length);
    this.totalPrice = this.productsService.getStockTotalPrice();
    this.flashMessages.show('Товар удален из корзины', {
      cssClass: 'alert-primary',
      timeout: 1000
    })
  }
}
