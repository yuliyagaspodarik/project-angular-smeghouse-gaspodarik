import {Component, OnInit, ViewChild} from '@angular/core';
import {Products} from '../products.interface';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";
import {QuantityCounterComponent} from "../quantity-counter/quantity-counter.component";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  product: Products;
  article: string;
  quantity: number;

  @ViewChild(QuantityCounterComponent, {static: false}) quantityCounter: QuantityCounterComponent;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.route.queryParams.subscribe((queryParam) => {
      this.article = Object.values(queryParam).join('');
    });
  }

  ngOnInit() {
    this.product = this.productsService.getProduct(this.article)[0];
  }

  addToFavorite($event) {
    this.productsService.addToFavorite(this.article);
    $event.target.classList.toggle('fa-heart');
    $event.target.classList.toggle('fa-heart-o');
  }

  addToStock() {
    this.quantity = this.quantityCounter.getValue();
    this.productsService.addToStockProducts(this.product, this.quantity);
  }
}
