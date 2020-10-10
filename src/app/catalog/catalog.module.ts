import {RouterModule, Routes} from "@angular/router";
import {ProductCartComponent} from "../product-cart/product-cart.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogComponent} from "./catalog.component";
import {ProductCartPreviewComponent} from "../product-cart-preview/product-cart-preview.component";


const routes: Routes = [
  {
    path: 'catalog/:id',
    component: ProductCartComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogModule {}
