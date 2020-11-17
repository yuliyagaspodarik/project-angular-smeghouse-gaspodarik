import { ActivatedRoute } from "@angular/router";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";


import { ProductsService } from "../../core/products.service";

@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.css']
})
export class CategoriesDashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  categories: string[] = [];

  constructor(private productsService: ProductsService, private spinner: NgxSpinnerService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.spinner.show();
    this.subscription = this.route.data.subscribe((data) => {
      this.categories = data.path;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  checkCategory(category) {
    this.productsService.searchedProducts = this.productsService.getProducts().filter(product => product.category === category);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
