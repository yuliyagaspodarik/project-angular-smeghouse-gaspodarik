import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from "@angular/fire";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from "angular2-flash-messages";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from "@angular/forms";
import { RoutingModule } from "./routing.module";

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogModule } from "./catalog/catalog.module";
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { firebase } from '../environments/firebase';
import { FavoritesModule } from "./favorites/favorites.module";
import { FilterComponent } from './catalog/filter/filter.component';
import { FilterItemComponent } from './catalog/filter-item/filter-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundModule } from "./not-found/not-found.module";
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityCounterComponent } from './product-cart/quantity-counter/quantity-counter.component';
import { SharedModule } from "./shared/shared.module";
import { StockModule } from "./stock/stock.module";

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
      RoutingModule,
      SharedModule,
      StockModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
