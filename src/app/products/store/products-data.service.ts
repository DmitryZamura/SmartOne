import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  DefaultDataService, DefaultDataServiceConfig,
  HttpUrlGenerator,
  QueryParams
} from '@ngrx/data';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IProduct} from "../models/product";
import {SelectedProductsService} from "../../selected-products/selected-products.service";


@Injectable()
export class ProductDataService extends DefaultDataService<IProduct> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator,
              defaultDataServiceConfig: DefaultDataServiceConfig, private selectedProductsService: SelectedProductsService) {
    super('Product', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  override getWithQuery(params: string | QueryParams): Observable<IProduct[]> {
    return super.getWithQuery(params).pipe(
      map((result: any) => {
        const selectedProducts = this.selectedProductsService.selectedProducts$.getValue();
        return  (result.products ? result.products : [])
          .map((value: IProduct) => {
            const index = selectedProducts.findIndex((item: IProduct) => item.id == value.id);
            value.selected = index >= 0
            return value;
          });

      })
    );

  }


  override getAll(): Observable<IProduct[]> {
    return super.getAll().pipe(
      map((result: any) => {
        return result.products ? result.products : [];
      })
    );
  }

  override add(entity: IProduct): Observable<IProduct> {
    return super.add(entity).pipe(
      map((result: any) => {
        return result.data ? result.data : result;
      })
    )
  }


}
