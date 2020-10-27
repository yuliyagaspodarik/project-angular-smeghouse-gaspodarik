import { ActivatedRoute } from "@angular/router";
import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { ProductsService } from "../core/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.css']
})
export class CategoriesDashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  categories: string[] = [];
  categoriesLeft: string[] = [];
  categoriesRight: string[] = [];

  constructor(private productsService: ProductsService, private spinner: NgxSpinnerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.subscription = this.route.data.subscribe((data) => {
      this.categories = data.path;
      this.categoriesRight = data.path.slice(Math.ceil(data.path.length / 2), data.path.length);
      this.spinner.hide();
    });

    //this.categoriesLeft = this.categories.slice(0, Math.ceil(this.categories.length / 2));
    //this.categoriesRight = this.categories.slice(Math.ceil(this.categories.length / 2), this.categories.length);
  }

  checkCategory(category) {
    this.productsService.searchedProducts = this.productsService.getProducts().filter(product => product.category === category);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
