import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CategoriesDashboardComponent} from "./categories-dashboard/categories-dashboard.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductCartComponent} from "./product-cart/product-cart.component";
import {LoginComponent} from "./login/login.component";
import {CatalogModule} from "./catalog/catalog.module";
import {PathResolverService} from "./path-resolver.service";

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
  },
  {
    path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
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
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), CatalogModule ],
  exports: [RouterModule],
})
export class RoutingModule {}
