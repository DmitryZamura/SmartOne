import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), pathMatch: 'full'},
  {
    path: 'selected-products',
    loadChildren: () => import('./selected-products/selected-products.module').then(m => m.SelectedProductsModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
