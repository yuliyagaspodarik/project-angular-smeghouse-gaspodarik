import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import {ProductsService} from "../core/products.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogResolverService implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let filteredProducts;
    let products = this.productsService.getProducts();
    let searchedProducts = this.productsService.searchedProducts;
    if (searchedProducts.length !== 0) {
      filteredProducts = searchedProducts
    } else {
      filteredProducts = products;
    }

    return {filteredProducts, products};
  }
}
