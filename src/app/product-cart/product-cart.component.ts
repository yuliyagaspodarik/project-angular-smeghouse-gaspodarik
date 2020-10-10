import {Component, OnInit} from '@angular/core';
import {Products} from '../products.interface';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  product: Products;
  article: string;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.route.queryParams.subscribe((queryParam) => {
      this.article = Object.values(queryParam).join('');
    });
  }

  ngOnInit() {
    this.product = this.productsService.getProduct(this.article)[0];
  }

  addToFavorite($event) {
    this.product.select = !this.product.select;
    $event.target.classList.toggle('fa-heart');
    $event.target.classList.toggle('fa-heart-o');
  }
}
