import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../guards/auth.service';
import { distinct, map, pluck, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';

import { Products, User } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products$: Observable<any>;
  contacts$: Observable<any>;
  categories: string[] = [];
  searchedProducts: Products[] = [];
  favoriteProducts: Products[] = [];
  products: Products[] = [];
  users: User[] = [];
  stockProducts: Products[] = [];
  stockValue = new Subject<number>();

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  getProductsFireBase(): Observable<Products[]> {
    this.products$ = this.afs
      .collection('products', (ref) => ref.orderBy('category', 'asc'))
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((action) => {
            const data = action.payload.doc.data() as Products;
            data.id = action.payload.doc.id;
            return data;
          });
        })
      );

    this.products$.subscribe((items: Products[]) => {
      this.products = items;
    });

    return this.products$;
  }

  getProducts() {
    return [...this.products];
  }

  getCategoriesFireBase() {
    this.categories = [];
    this.products$
      .pipe(
        switchMap((products: Observable<Products>) =>
          from(products).pipe(distinct((item: Products) => item.category))
        ),
        pluck('category')
      )
      .subscribe((category) => {
        this.categories.push(category);
      });

    return this.categories;
  }

  getCategories() {
    return this.categories;
  }

  getContactsFireBase(): Observable<any> {
    this.contacts$ = this.afs.collection('contacts').valueChanges();
    return this.contacts$;
  }

  getProduct(article) {
    return this.products.filter((product) => product.article === article);
  }

  getStockProducts() {
    return this.stockProducts;
  }

  addToStockProducts(product, quantity) {
    this.stockProducts.push({
      ...product,
      quantity: quantity === 0 ? 1 : quantity,
    });
    this.stockValue.next(this.stockProducts.length);

    product.quantity = quantity;
    this.authService
      .getAuth()
      .pipe(
        switchMap((user) => {
          return this.afs
            .collection(`users/${user.uid}/stock`)
            .doc(`${product.article}`)
            .set(product);
        })
      )
      .subscribe();
  }

  removeStockProduct(i) {
    this.stockProducts.splice(i, 1);
  }

  getStockTotalPrice() {
    let totalPrice = 0;
    for (let product of this.stockProducts) {
      totalPrice += product.price * product.quantity;
    }

    return totalPrice;
  }

  getStockValue(): Observable<any> {
    return this.stockValue;
  }

  addToFavorite($event, product) {
    product.select = !product.select;
    window.navigator.vibrate(1000);
    $event.target.classList.toggle('fa-heart');
    $event.target.classList.toggle('fa-heart-o');

    if (product.select) {
      this.authService
        .getAuth()
        .pipe(
          switchMap((user) => {
            return this.afs
              .collection(`users/${user.uid}/favorites`)
              .doc(`${product.article}`)
              .set(product);
          })
        )
        .subscribe();
    } else {
      this.authService
        .getAuth()
        .pipe(
          switchMap((user) => {
            return this.afs
              .doc(`users/${user.uid}/favorites/${product.article}`)
              .delete();
          })
        )
        .subscribe();
    }
  }

  getFavoriteProducts() {
    this.favoriteProducts = this.products.filter((product) => product.select);
    return this.favoriteProducts;
  }

  getUserProducts(id: string) {
    this.afs
      .collection(`users/${id}/stock/`)
      .valueChanges()
      .subscribe((value: Products[]) => {
        this.stockProducts = [...value];
      });
    this.afs
      .collection(`users/${id}/favorites/`)
      .valueChanges()
      .subscribe((value: Products[]) => {
        value.forEach((val) => {
          this.products.forEach((prod) => {
            if (prod.article === val.article) {
              prod.select = true;
            }
          });
        });
      });
  }
}
