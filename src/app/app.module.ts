import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
