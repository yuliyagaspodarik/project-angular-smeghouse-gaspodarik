import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime } from "rxjs/operators";
import { fromEvent, Subscription } from "rxjs";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { ProductsService } from "../core/products.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;
  stockValue$: Observable<any>;

  @ViewChild('search') search: ElementRef;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.stockValue$ = this.productsService.getStockValue();
  }

  ngAfterViewInit() {
    this.subscription = fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        debounceTime(3000))
      .subscribe(() => {
        this.productsService.searchedProducts = this.productsService.getProducts().filter(product => product.name.toLowerCase().indexOf(this.search.nativeElement.value.toLowerCase()) !== -1);
        this.search.nativeElement.value = '';
        this.router.navigate(['/catalog']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
