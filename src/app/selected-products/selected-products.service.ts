import {Injectable} from '@angular/core';
import {IProduct} from "../products/models/product";
import {BehaviorSubject} from "rxjs";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class SelectedProductsService {

  selectedProducts$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private messageService: MessageService) {
  }


addProductsToLocalStore(products: IProduct[], selected: boolean) {
    this.setProducts(products)
  if (selected) {
    this.messageService.add({
      severity: 'success',
      summary: 'Saved',
      detail: 'The product has been successfully added to your favorites)'
    });
  } else {
    this.messageService.add({
      severity: 'info',
      summary: 'Removed',
      detail: 'The product has been successfully removed from the saved)'
    });
  }

}
private setProducts(products: IProduct[]) {
    localStorage.setItem('products', JSON.stringify(products));
    this.selectedProducts$.next(products);
  }

  refreshProducts() {
    const products = localStorage.getItem('products');
    this.selectedProducts$.next(products ? JSON.parse(products) : []);
  }

  removeSelectedProduct(product: IProduct) {
    const products = JSON.parse('' + localStorage.getItem('products'));
    const index = products.findIndex((item: IProduct) => item.id == product.id);
    if (index >= 0) {
      products.splice(index, 1);
      this.setProducts(products);
      this.messageService.add({
        severity: 'info',
        summary: 'Removed',
        detail: 'The product has been successfully removed from the saved'
      });
    }
  }

}
