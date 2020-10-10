import {Component, Input} from '@angular/core';
import { Products } from './../products.interface';

@Component({
  selector: 'app-product-cart-preview',
  templateUrl: './product-cart-preview.component.html',
  styleUrls: ['./product-cart-preview.component.css']
})
export class ProductCartPreviewComponent {
  @Input()
  product: Products;
  @Input()
  id: number;

  addToFavorite($event) {
    this.product.select = !this.product.select;
    $event.target.classList.toggle('fa-heart');
    $event.target.classList.toggle('fa-heart-o');
  }
}
