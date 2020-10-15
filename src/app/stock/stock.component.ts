import {Component, OnInit} from '@angular/core';
import {Products} from "../products.interface";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockProducts: Products[] = [];
  totalPrice: number = 0;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.stockProducts = this.productsService.getStockProducts();
    for (let product of this.stockProducts) {
      this.totalPrice += product.price * product.quantity;
    }
  }
}
