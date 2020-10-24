import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./guards/auth.guard";
import { AuthModule } from "./guards/auth.module";
import { CatalogComponent } from "./catalog/catalog.component";
import { CatalogModule } from "./catalog/catalog.module";
import { CategoriesDashboardComponent } from "./categories-dashboard/categories-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { PathResolverService } from "./services/path-resolver.service";

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
    path: 'stock',
    canLoad: [AuthGuard],
    loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'favorites',
    canLoad: [AuthGuard],
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
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
  imports: [
    AuthModule,
    CatalogModule,
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [ RouterModule ],
})
export class RoutingModule {}
