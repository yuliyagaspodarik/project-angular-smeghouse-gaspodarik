import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {debounceTime} from "rxjs/operators";
import {ProductsService} from "../products.service";
import {fromEvent, Subscription} from "rxjs";
import {Products} from "../products.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;
  searchedProducts: Products[];
  @ViewChild('search') search: ElementRef;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.subscription = fromEvent(this.search.nativeElement, 'keyup').pipe(debounceTime(3000)).subscribe(() => {
      this.searchedProducts = this.productsService.getProducts().filter(product => product.name.toLowerCase().indexOf(this.search.nativeElement.value.toLowerCase()) !== -1);
      this.search.nativeElement.value = '';
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
