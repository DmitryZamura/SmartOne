import {Component, ViewChild} from '@angular/core';
import {IProduct} from "../models/product";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ViewMode} from "../../helpers/mode";
import {ProductsService} from "../store/products.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent {

  @ViewChild('form') formElement!: NgForm;

  title = '';
  display = false;

  productForm!: FormGroup;

  mode = ViewMode.ReadOnly;

  constructor(private formBuilder: FormBuilder, private service: ProductsService,
              private messageService: MessageService) {

  }

  initForm() {
    this.productForm = this.formBuilder.group({
      id:[],
      title: ['', Validators.required],
      description: [''],
      price: [0, Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      image: [],
    })
  }

  editProduct(product: IProduct) {
    this.initForm();
    this.mode = ViewMode.Edit;
    this.productForm.patchValue(product);
    this.title = 'Edit product';
    this.display = true;
  }

  addProduct() {
    this.initForm();
    this.mode = ViewMode.New;
    this.title = 'Add new product'
    this.display = true;
  }

  onClose() {
    this.display = false;

  }

  onChange() {
  }


  onSubmitClick() {
    this.formElement.ngSubmit.emit();
  }

  onSubmit() {
    if (this.mode === ViewMode.New) {
      this.service.add(this.productForm.value).subscribe(()=>{
        this.messageService.add({
          severity: 'success',
          summary: 'Saved',
          detail: 'The product has been successfully created)'
        });
      });
    }

    if (this.mode === ViewMode.Edit) {
      this.service.updateProduct(this.productForm.value);
    }


    this.onClose();
  }
}
