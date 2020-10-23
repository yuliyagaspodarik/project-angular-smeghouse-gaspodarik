import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import { StockComponent } from "./stock.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [{ path: '', component: StockComponent}];

@NgModule({
  declarations: [ StockComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), SharedModule ],
})
export class StockModule { }
