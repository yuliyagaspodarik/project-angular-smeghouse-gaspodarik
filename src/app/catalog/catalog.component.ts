import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from '@angular/core';

import { FilterComponent } from "./filter/filter.component";
import { Products } from '../models/products.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  filteredProducts: Products[];
  products: Products[];

  @ViewChild(FilterComponent, {static: false}) filterComponent: FilterComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.filteredProducts = data.path[0];
      this.products = data.path[1];
    })
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
