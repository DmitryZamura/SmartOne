import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "./top-bar.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule, ToolbarModule, ButtonModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
