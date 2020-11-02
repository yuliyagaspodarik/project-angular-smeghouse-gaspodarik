import { AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

import { Products } from '../../models/products.interface';
import { ProductsService } from "../../core/products.service";
import {FlashMessagesService} from "angular2-flash-messages";

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

  constructor(private productsService: ProductsService, private flashMessages: FlashMessagesService) {}

  addToFavorite($event) {
    this.productsService.addToFavorite($event, this.product);
  }

  addToStock() {
    this.productsService.addToStockProducts(this.product, 1);
    window.navigator.vibrate(200);
    this.flashMessages.show('Товар добавлен в корзину', {
      cssClass: 'alert-success',
      timeout: 2000
    })
  }

  ngAfterContentInit() {
    this.productsCart.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
    this.removeImage.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
  }
}
