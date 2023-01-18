import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedProductsRoutingModule } from './selected-products-routing.module';
import {SelectedProductsComponent} from "./selected-products.component";
import {ProductsTableModule} from "../products-table/products-table.module";


@NgModule({
  declarations: [SelectedProductsComponent],
  imports: [
    CommonModule,
    SelectedProductsRoutingModule,
    ProductsTableModule
  ]
})
export class SelectedProductsModule { }
