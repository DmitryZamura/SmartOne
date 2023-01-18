import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SelectedProductsService} from "./selected-products.service";
import {IProduct} from "../products/models/product";
import {ProductMenuAction} from "../helpers/actions";
import {EventService} from "../helpers/event.service";
import {Subject, takeUntil} from "rxjs";
import {ViewMode} from "../helpers/mode";

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductsComponent implements OnInit {
  products$ = this.service.selectedProducts$;
  actions = [ProductMenuAction.RemoveSelection];

  mode = ViewMode.ReadOnly;
  destroyNotifier$ = new Subject();
  constructor(private service: SelectedProductsService, private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.removeSelectedProductEvent.pipe(
      takeUntil(this.destroyNotifier$)
    ).subscribe((product) => this.service.removeSelectedProduct(product));
  }
}
