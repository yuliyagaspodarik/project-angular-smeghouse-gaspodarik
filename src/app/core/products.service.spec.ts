import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";

import { FilterComponent } from "../components/catalog/filter/filter.component";
import { ProductsService } from './products.service';
import { ProductCartComponent } from "../components/product-cart/product-cart.component";
import { StockComponent } from "../components/stock/stock.component";

class Mock {
  stockProducts = [
    {
      category: 'Чайники',
      url: '../assets/images/ch-blue.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03WHEU',
      price: 515,
      color: 'голубой',
      body: 'сталь',
      volume: 1.7,
      size: '248',
      rotate: 360,
      power: 2.4,
      light: true,
      additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
      producer: 'Italy',
      select: false,
      quantity: 2
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-green.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03WHEW',
      price: 450,
      color: 'пастельный зеленый',
      body: 'сталь',
      volume: 1.7,
      size: '248',
      rotate: 360,
      power: 2.4,
      light: true,
      additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
      producer: 'Italy',
      select: false,
      quantity: 1
    }
  ];

  getStockProducts() {
    return this.stockProducts;
  };

  getStockTotalPrice() {
    let totalPrice = 0;
    for (let product of this.stockProducts) {
      totalPrice += product.price * product.quantity;
    }

    return totalPrice;
  };

  getCategories() {
    return of(['Чайники'])
  };
}

describe('ProductsService', () => {
  let service: ProductsService;
  let stockComponent: StockComponent;
  let filterComponent: FilterComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockComponent,
        FilterComponent
      ],
      providers: [
        {provide: ProductsService, useClass: Mock}
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products on init', () => {
    spyOn(service, 'getProducts').and.callThrough();
    stockComponent.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
  });

  it('should get categories on init', () => {
    spyOn(service, 'getCategories').and.callThrough();
    filterComponent.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
  });

  it('should get correct value total price', () => {
    stockComponent.ngOnInit();
    expect(service.getStockTotalPrice()).toBe(1480);
  });
});
