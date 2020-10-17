import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.css']
})
export class CategoriesDashboardComponent implements OnInit {
  categories: string[];
  categoriesLeft: string[];
  categoriesRight: string[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories = this.productsService.getCategories().sort();
    const dimensionCategories = this.categories.length;
    this.categoriesLeft = this.categories.slice(0, Math.ceil(dimensionCategories / 2));
    this.categoriesRight = this.categories.slice(Math.ceil(dimensionCategories / 2), dimensionCategories);
  }

  checkCategory(category) {
    this.productsService.searchedProducts = this.productsService.getProducts().filter(product => product.category === category);
  }
}
