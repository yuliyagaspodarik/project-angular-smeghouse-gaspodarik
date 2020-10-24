import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductCartComponent } from "../product-cart/product-cart.component";

const routes: Routes = [
  {
    path: 'catalog/:id',
    component: ProductCartComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CatalogModule {}
