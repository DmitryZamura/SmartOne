import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditProductComponent} from "./edit-product.component";
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";



@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule, DialogModule, ReactiveFormsModule, ButtonModule, InputTextModule, InputTextareaModule,
    InputNumberModule
  ],
  exports: [EditProductComponent]
})
export class EditProductModule { }
