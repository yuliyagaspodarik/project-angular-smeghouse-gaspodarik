import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

import { FilterItemComponent } from "../filter-item/filter-item.component";
import { ProductsService } from "../../core/products.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories: string[];
  selectCategories: string[] = [];

  @Output()
  onFilterChange = new EventEmitter<any>();

  @ViewChildren(FilterItemComponent) filterItems: QueryList<FilterItemComponent>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.categories = this.productsService.getCategories();
  }

  onInputChange() {
    this.selectCategories = [];
    this.filterItems.forEach((item) => {
      if (item.check) {
        this.selectCategories.push(item.id)
      }
    });
    this.onFilterChange.emit(this.selectCategories);
  }
}
