import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionButtonsComponent} from "./action-buttons.component";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";




@NgModule({
  declarations: [ActionButtonsComponent],
  imports: [
    CommonModule, OverlayPanelModule, ButtonModule, MenuModule, ConfirmDialogModule
  ],
  exports: [ActionButtonsComponent]
})
export class ActionButtonsModule { }
