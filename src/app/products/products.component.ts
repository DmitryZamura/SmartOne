import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "./store/products.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {IProduct} from "./models/product";
import {SelectedProductsService} from "../selected-products/selected-products.service";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {EventService} from "../helpers/event.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {

  products$: Observable<IProduct[]>;
  selectedProducts$: Observable<IProduct[]>;

  destroyNotifier$ = new Subject();

  loading$: Observable<boolean | any>;

  constructor(private service: ProductsService, private selectedProductsService: SelectedProductsService,
              private eventService: EventService, private messageService: MessageService) {
    this.products$ = this.service.entities$;
    this.selectedProducts$ = this.selectedProductsService.selectedProducts$;
    this.loading$ = this.service.loading$;
  }

  ngOnInit() {

    this.service.getWithQuery({limit: '0', skip: '0', ordering: '-id'});

    this.eventService.removeProductEvent.pipe(
      takeUntil(this.destroyNotifier$)
    ).subscribe((product) => this.removeProduct(product));
  }


  onProductsSelected(products: IProduct[], selected: boolean) {
    this.selectedProductsService.addProductsToLocalStore(products, selected);
  }


  removeProduct(product: IProduct) {
    this.service.delete(product).subscribe(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Removed',
        detail: 'The product has been successfully removed from the server)'
      });
      this.selectedProductsService.removeSelectedProduct(product);
    });
  }

  ngOnDestroy() {
    this.destroyNotifier$.next(null);
    this.destroyNotifier$.complete()
  }
}
