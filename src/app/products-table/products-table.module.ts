import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsTableComponent} from "./products-table.component";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {ActionButtonsModule} from "../action-buttons/action-buttons.module";



@NgModule({
  declarations: [ProductsTableComponent],
  imports: [
    CommonModule, TableModule, CheckboxModule, FormsModule, ActionButtonsModule
  ],
  exports: [ProductsTableComponent]
})
export class ProductsTableModule {}
