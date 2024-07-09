import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Constants from 'src/app/constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isEdit: boolean;
  rowData: any;

  options = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'exotic', viewValue: 'Exotic' },
    { value: 'seasonal', viewValue: 'Seasonal' },
  ];

  constructor(private dataService: DataService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.isEdit = data.isEdit;
    if (this.isEdit) {
      this.rowData = data.rowData;
      this.group = this.rowData.group;
      this.name = this.rowData.name;
      this.type = this.rowData.type;
      this.quantity = this.rowData.quantity;
      this.price = this.rowData.price;
    }
  }

  group: string = '';
  name: string = '';
  type: string = '';
  quantity: number = 0;
  price: number = 0;

  

  // formControl = new FormControl('', [Validators.required,this.quantityValidator()]);

  // quantityValidator(control:FormControl) {
  //   const quantity = control.value
  //   if ( quantity!==null && quantity < 1) {
  //     return { invalidQuantity: true };
  //   } else {
  //     return null;
  //   }
  // }

  validQuantity(): boolean {
    if (this.quantity > 0) {
      return true;
    } else {
      return false;
    }
  }

  validPrice(): boolean {
    if (this.price > 0) {
      return true;
    } else {
      return false;
    }
  }

  isValid(): boolean {
    if (this.validPrice() && this.validQuantity()) {
      return true;
    } else {
      return false;
    }
  }

  quantityError = '';
  updateQuantityErrorMessage() {
    if (!this.validQuantity()) {
      this.quantityError = 'please select a valid quantity';
    }
  }

  priceError = '';
  updatePriceErrorMessage() {
    if (!this.validPrice()) {
      this.priceError = 'please select a valid price';
    }
  }

  quantity_label = Constants.QUANTITY_LABEL;
  vegetable_label = Constants.VEGETABLE_LABEL;
  fruit_label = Constants.FRUIT_LABEL;

  onSubmit() {}

  cancel(){
    if(!this.isEdit){
    this.group = '';
    this.name = '';
    this.type = '';
    }
    this.quantity = 0;
    this.price = 0;
    this.quantityError=""
    this.priceError=""
  }
}
