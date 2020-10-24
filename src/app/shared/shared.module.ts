import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductCartPreviewComponent } from "./product-cart-preview/product-cart-preview.component";

@NgModule({
  declarations: [ ProductCartPreviewComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ ProductCartPreviewComponent ]
})
export class SharedModule {}
