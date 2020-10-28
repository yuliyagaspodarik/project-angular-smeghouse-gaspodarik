import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './guards/auth.module';
import { CatalogResolverService } from './components/catalog/catalog-resolver.service';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CategoriesDashboardComponent } from './components/categories-dashboard/categories-dashboard.component';
import { CategoriesDashboardResolverService } from './components/categories-dashboard/categories-dashboard-resolver.service';
import { LoginComponent } from './components/login/login.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { PathResolverService } from './services/path-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: CategoriesDashboardComponent,
    resolve: {
      path: CategoriesDashboardResolverService,
    },
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: {
      path: CatalogResolverService,
    },
    loadChildren: () =>
      import('./components/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'stock',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'favorites',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'favorites/:id',
    component: ProductCartComponent,
  },
  {
    path: '**',
    resolve: {
      path: PathResolverService,
    },
    loadChildren: () =>
      import('./components/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    CatalogModule,
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
