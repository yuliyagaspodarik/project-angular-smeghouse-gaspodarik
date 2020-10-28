import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from "@angular/fire";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from "angular2-flash-messages";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogModule } from "./components/catalog/catalog.module";
import { CategoriesDashboardComponent } from './components/categories-dashboard/categories-dashboard.component';
import { firebase } from '../environments/firebase';
import { FavoritesModule } from "./components/favorites/favorites.module";
import { FilterComponent } from './components/catalog/filter/filter.component';
import { FilterItemComponent } from './components/catalog/filter-item/filter-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundModule } from "./components/not-found/not-found.module";
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { QuantityCounterComponent } from './components/product-cart/quantity-counter/quantity-counter.component';
import { SharedModule } from "./shared/shared.module";
import { StockModule } from "./components/stock/stock.module";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoriesDashboardComponent,
    FilterComponent,
    FilterItemComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProductCartComponent,
    QuantityCounterComponent
  ],
    imports: [
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(firebase),
      BrowserAnimationsModule,
      BrowserModule,
      CatalogModule,
      FavoritesModule,
      FlashMessagesModule.forRoot(),
      NgxSpinnerModule,
      NotFoundModule,
      ReactiveFormsModule,
      AppRoutingModule,
      SharedModule,
      StockModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
