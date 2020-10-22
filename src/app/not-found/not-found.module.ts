import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
//import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [{ path: '', component: NotFoundComponent}];

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes)/*, FormsModule */],
})
export class NotFoundModule { }
