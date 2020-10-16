import {Component, OnInit, ViewChild} from '@angular/core';
import {Products} from '../products.interface';
import {ProductsService} from "../products.service";
import {FilterComponent} from "../filter/filter.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  filteredProducts: Products[] = [];
  products: Products[] = [];
  searchedProducts: Products[];

  @ViewChild(FilterComponent, {static: false}) filterComponent: FilterComponent;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.searchedProducts = this.productsService.searchedProducts;
    if (this.searchedProducts.length !== 0) {
      this.filteredProducts = this.searchedProducts
    } else {
      this.filteredProducts = this.products;
    }
  }

  onFilterChange(data) {
    this.filteredProducts = [];
    this.products.forEach((product) => {
        if (data.indexOf(product.category) !== -1) {
          this.filteredProducts.push(product)
        }
      }
    );
    if (this.filteredProducts.length == 0) {
      this.filteredProducts = this.products;
    }

    return this.filteredProducts.sort();
  }

  scrollUp() {
    window.scrollTo(0,0);
  }
}
