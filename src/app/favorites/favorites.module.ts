import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import { FavoritesComponent } from "./favorites.component";

const routes: Routes = [{ path: '', component: FavoritesComponent}];

@NgModule({
  declarations: [ FavoritesComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
})
export class FavoritesModule { }
