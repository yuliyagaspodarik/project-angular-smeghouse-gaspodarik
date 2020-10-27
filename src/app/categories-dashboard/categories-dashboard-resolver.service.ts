import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ProductsService } from "../core/products.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesDashboardResolverService implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.productsService.getProductsFireBase();

    let categories = this.productsService.getCategoriesFireBase();

    if (categories.length === 0) {
      this.productsService.getCategories();
    }

    return categories;
  }
}
