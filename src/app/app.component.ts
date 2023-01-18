import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SelectedProductsService} from "./selected-products/selected-products.service";
import {Subject, takeUntil} from "rxjs";
import {EventService} from "./helpers/event.service";
import {EditProductComponent} from "./products/edit-product/edit-product.component";
import {IProduct} from "./products/models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('editor') editorComponent!: EditProductComponent;
  title = 'SmartOne';
  destroyNotifier$ = new Subject();

  constructor(private selectedProductsService: SelectedProductsService, private eventService: EventService ) {
  }

  ngOnInit() {
    this.selectedProductsService.refreshProducts();
    this.eventService.editProductEvent.pipe(
      takeUntil(this.destroyNotifier$)
    ).subscribe(product => this.editProduct(product));

    this.eventService.addProductEvent.pipe(
      takeUntil(this.destroyNotifier$)
    ).subscribe(() => this.addProduct());
  }

  editProduct(product: IProduct) {
    this.editorComponent.editProduct(product);
  }

  addProduct() {
    this.editorComponent.addProduct()
  }

  ngOnDestroy() {
    this.destroyNotifier$.next(null);
    this.destroyNotifier$.complete()
  }

}
