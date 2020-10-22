import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import { StockComponent } from "./stock.component";

const routes: Routes = [{ path: '', component: StockComponent}];

@NgModule({
  declarations: [ StockComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
})
export class StockModule { }
