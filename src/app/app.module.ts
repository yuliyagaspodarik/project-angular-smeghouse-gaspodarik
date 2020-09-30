import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesDashboardComponent,
    ProductCartComponent,
    QuantityCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
