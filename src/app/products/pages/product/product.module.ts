import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PriceModule } from '../../components/price/price.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PriceModule
  ]
})
export class ProductModule { }
