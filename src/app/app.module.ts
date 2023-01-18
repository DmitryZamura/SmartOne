import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SideBarMenuModule} from "./side-bar-menu/side-bar-menu.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoSlashInterceptor} from "./interceptor";
import {TopBarModule} from "./top-bar/top-bar.module";
import {EditProductModule} from "./products/edit-product/edit-product.module";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";




export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.endPointUrl,
  timeout: 0, // request timeout
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    ToastModule,
    SideBarMenuModule,
    TopBarModule,
    EditProductModule,
    ConfirmDialogModule
  ],
  providers: [{provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig},
    { provide: HTTP_INTERCEPTORS, useClass: NoSlashInterceptor, multi: true }, MessageService, ConfirmationService
    // { provide: HttpUrlGenerator, useClass: NoSlashHttpUrlGenerator }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
