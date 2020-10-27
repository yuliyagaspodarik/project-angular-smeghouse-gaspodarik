import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../core/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.css']
})
export class CategoriesDashboardComponent implements OnInit {
  categories: string[];
  categoriesLeft: string[];
  categoriesRight: string[];
  categories$: Observable<any>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    //this.categories$=this.productsService.categories$;
    this.categories=this.productsService.categories;
    this.categoriesLeft=this.productsService.categoriesLeft;
    this.categoriesRight=this.productsService.categoriesRight;
   // this.categories = this.productsService.getCategoriesFireBase().sort();
    //this.categoriesLeft = this.categories.slice(0, Math.ceil(this.categories.length / 2));
   // this.categoriesRight = this.categories.slice(Math.ceil(this.categories.length / 2), this.categories.length);

  }

  checkCategory(category) {
    this.productsService.searchedProducts = this.productsService.getProducts().filter(product => product.category === category);
  }
}
