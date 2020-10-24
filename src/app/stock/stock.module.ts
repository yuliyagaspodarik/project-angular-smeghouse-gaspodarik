import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { StockComponent } from "./stock.component";

const routes: Routes = [{ path: '', component: StockComponent}];

@NgModule({
  declarations: [ StockComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ]
})
export class StockModule {}
