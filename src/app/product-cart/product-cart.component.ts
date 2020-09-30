import { Component, OnInit, Input } from '@angular/core';
import { Products } from './../products.interface';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input()
  product: Products;
  constructor() { }

  ngOnInit(): void {
  }

}
