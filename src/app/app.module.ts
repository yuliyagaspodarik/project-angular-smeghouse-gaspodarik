import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from "./routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StockModule} from "./stock/stock.module";
import {NotFoundModule} from "./not-found/not-found.module";
import {FavoritesModule} from "./favorites/favorites.module";
import {SharedModule} from "./shared/shared.module";
import {CatalogModule} from "./catalog/catalog.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesDashboardComponent,
    ProductCartComponent,
    QuantityCounterComponent,
    CatalogComponent,
    FilterComponent,
    FilterItemComponent,
    LoginComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule, RoutingModule, ReactiveFormsModule, StockModule, FavoritesModule, NotFoundModule, SharedModule, CatalogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
