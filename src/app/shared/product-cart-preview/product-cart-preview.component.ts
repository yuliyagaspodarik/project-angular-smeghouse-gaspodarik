import { AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

import { Products } from '../../models/products.interface';
import { ProductsService } from "../../core/products.service";

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

  constructor(private productsService: ProductsService) {}

  addToFavorite($event) {
    this.productsService.addToFavorite($event, this.product);
  }

  ngAfterContentInit() {
    this.productsCart.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
    this.removeImage.forEach(cart => cart.nativeElement.nextElementSibling.style.display = 'none');
  }
}
