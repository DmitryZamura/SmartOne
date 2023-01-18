import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductsService} from "./store/products.service";
import {ProductDataService} from "./store/products-data.service";
import { EntityDataService} from "@ngrx/data";
import {ProductsTableModule} from "../products-table/products-table.module";
import {EditProductModule} from "./edit-product/edit-product.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductsTableModule,
    EditProductModule
  ],
  providers: [ProductDataService]
})
export class ProductsModule {
  constructor(
    entityDataService: EntityDataService,
    productDataService: ProductDataService,
  ) {
    entityDataService.registerService('Product', productDataService); // <-- register it
  }
}
