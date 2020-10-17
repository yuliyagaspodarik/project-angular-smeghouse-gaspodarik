import {AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList} from '@angular/core';
import { Products } from '../products.interface';

@Component({
  selector: 'app-product-cart-preview',
  templateUrl: './product-cart-preview.component.html',
  styleUrls: ['./product-cart-preview.component.css']
})
export class ProductCartPreviewComponent implements AfterContentInit {
  @Input()
  product: Products;
  @Input()
  id: number;

  @ContentChildren('quantity') productsCart: QueryList<ElementRef>;

  @ContentChildren('removeImage') removeImage: QueryList<ElementRef>;

  addToFavorite($event) {
    this.product.select = !this.product.select;
    $event.target.classList.toggle('fa-heart');
    $event.target.classList.toggle('fa-heart-o');
  }

  ngAfterContentInit() {
    this.productsCart.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
    this.removeImage.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
  }
}
