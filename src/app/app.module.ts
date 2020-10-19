import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from "./routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductCartPreviewComponent } from './product-cart-preview/product-cart-preview.component';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { StockComponent } from './stock/stock.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesDashboardComponent,
    ProductCartComponent,
    QuantityCounterComponent,
    CatalogComponent,
    ProductCartPreviewComponent,
    FilterComponent,
    FilterItemComponent,
    StockComponent,
    FavoritesComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, RoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
