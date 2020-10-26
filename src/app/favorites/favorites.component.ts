import { Component, OnInit } from '@angular/core';

import { Products } from "../models/products.interface";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: Products[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    //this.favoriteProducts = this.productsService.getFavoriteProducts();
  }
}
