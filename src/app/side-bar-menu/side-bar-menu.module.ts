import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarMenuComponent} from "./side-bar-menu.component";
import {PanelMenuModule} from "primeng/panelmenu";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [SideBarMenuComponent],
  imports: [
    CommonModule, PanelMenuModule, RouterModule
  ],
  exports: [SideBarMenuComponent]
})
export class SideBarMenuModule { }
