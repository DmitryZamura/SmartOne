import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {ProductMenuAction} from "../helpers/actions";

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent implements OnInit {
  @Input() actions: ProductMenuAction[] = [];
  @ViewChild('op', {static: true}) overlayPanel!: OverlayPanel;
  @Output() selectedAction = new EventEmitter<ProductMenuAction>();

  items: MenuItem[] = [];

  constructor(private confirmationService: ConfirmationService) {
  }
  ngOnInit() {
    this.initMenu();
  }


  initMenu() {
    this.items = [
      {
        label: 'Add new', icon: 'pi pi-fw pi-plus',
        visible: this.actions.includes(ProductMenuAction.AddProduct),
        command: () => {
          this.onSelectItem(ProductMenuAction.AddProduct)
        }
      },
      {
        label: 'Edit product', icon: 'pi pi-fw pi-pencil',
        visible: this.actions.includes(ProductMenuAction.EditProduct),
        command: () => {
          this.onSelectItem(ProductMenuAction.EditProduct)
        }
      },
      {
        label: 'Edit image', icon: 'pi pi-fw pi-image',
        visible: this.actions.includes(ProductMenuAction.EditImage),
        command: () => {
          this.onSelectItem(ProductMenuAction.EditImage)
        }
      },
      {
        label: 'Remove product', icon: 'pi pi-fw pi-trash',
        visible: this.actions.includes(ProductMenuAction.RemoveProduct),
        command: () => {
          this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected product?',
            accept: () => {
              this.onSelectItem(ProductMenuAction.RemoveProduct)
            }
          });

        }
      },
      {
        label: 'Remove selection', icon: 'pi pi-fw pi-trash',
        visible: this.actions.includes(ProductMenuAction.RemoveSelection),
        command: () => {
          this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected product?',
            accept: () => {
              this.onSelectItem(ProductMenuAction.RemoveSelection)
            }
          });

        }
      }
    ];
  }


  onSelectItem(action: ProductMenuAction) {
    this.overlayPanel.hide();
    this.selectedAction.emit(action);


  }

}
