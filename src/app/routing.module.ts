import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CategoriesDashboardComponent} from "./categories-dashboard/categories-dashboard.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductCartComponent} from "./product-cart/product-cart.component";
import {StockComponent} from "./stock/stock.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {LoginComponent} from "./login/login.component";
import {CatalogModule} from "./catalog/catalog.module";
import {PathResolverService} from "./path-resolver.service";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: CategoriesDashboardComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
    /*children: [
      {
        path: '', component: CatalogComponent
      },
      {
        path: ':id', component: ProductCartComponent
      }
    ]*/
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'favorites/:id',
    component: ProductCartComponent
  },
  {
    path: '**',
      resolve: {
        path: PathResolverService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), CatalogModule ],
  exports: [RouterModule],
})
export class RoutingModule {}
