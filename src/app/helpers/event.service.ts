import {EventEmitter, Injectable, Output} from '@angular/core';
import {IProduct} from "../products/models/product";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() addProductEvent = new EventEmitter();
  @Output() editProductEvent = new EventEmitter<IProduct>();
  @Output() removeProductEvent = new EventEmitter<IProduct>();
  @Output() removeSelectedProductEvent = new EventEmitter<IProduct>();
  constructor() { }

  addProduct() {
    this.addProductEvent.emit();
  }

  editProduct(product: IProduct) {
    this.editProductEvent.emit(product)
  }

  removeProduct(product: IProduct) {
    console.log(product)
    this.removeProductEvent.emit(product)
  }

  removeSelectedProduct(product: IProduct)  {
    this.removeSelectedProductEvent.emit(product);
  }


}
