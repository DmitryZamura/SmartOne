import {Injectable} from '@angular/core';
import {
  EntityActionFactory, EntityActionPayload,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityOp
} from "@ngrx/data";
import {IProduct} from "../models/product";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductsService extends EntityCollectionServiceBase<IProduct> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory,
              private http: HttpClient, private entityActionFactory: EntityActionFactory) {
    super('Product', serviceElementsFactory);
  }


  updateProduct(item: IProduct) {
    this.http.patch<any>(`${environment.endPointUrl}/product/${item.id}`, item).subscribe(result => {
      const action = this.entityActionFactory.create<IProduct>({
        entityName: 'Product',
        entityOp: EntityOp.QUERY_BY_KEY_SUCCESS,
        data: result.product
      });
      this.store.dispatch(action);
    });
  }
}

