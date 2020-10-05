import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductCartPreviewComponent } from './product-cart-preview/product-cart-preview.component';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';

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
    FilterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
