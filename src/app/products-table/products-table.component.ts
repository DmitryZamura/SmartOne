import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../products/models/product";
import {environment} from "../../environments/environment";
import {ProductMenuAction} from "../helpers/actions";
import {EventService} from "../helpers/event.service";
import {ViewMode} from "../helpers/mode";
import {ProductsService} from "../products/store/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsTableComponent {

  @Input() products: IProduct[] | any = [];
  @Input() mode: ViewMode = ViewMode.Edit;
  @Input() actions: ProductMenuAction[] = [ProductMenuAction.AddProduct, ProductMenuAction.EditProduct,
    ProductMenuAction.RemoveProduct, ProductMenuAction.EditImage];
  @Input() rowsPerPage = environment.defaultRowsOnPage;

  @Input() selectedProducts: IProduct[] | any = [];

  @Input() loading = false;

  @Output() selected = new EventEmitter<IProduct[]>()

  @Output() unselected = new EventEmitter<IProduct[]>()

  imagesUrl = environment.endPointUrl;


  constructor(private eventService: EventService) {
  }

  onSelectionChange(event: any) {
    console.log(event);
  }

  onSelectProducts() {
    this.selected.emit(this.selectedProducts);
  }

  onUnSelectProducts() {
    this.unselected.emit(this.selectedProducts);
  }

  onActionSelected(action: ProductMenuAction, product: IProduct) {
    switch (action) {
      case ProductMenuAction.EditProduct : {
        this.eventService.editProduct(product);
        break;
      }
      case ProductMenuAction.AddProduct: {
        this.eventService.addProduct();
        break;
      }
      case ProductMenuAction.RemoveProduct: {
        this.eventService.removeProduct(product);
        break;
      }
      case ProductMenuAction.RemoveSelection: {
        this.eventService.removeSelectedProduct(product);
        break;
      }
    }


  }

}
