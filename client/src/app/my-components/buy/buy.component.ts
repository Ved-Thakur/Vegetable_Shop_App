import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Constants from '../../constants';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  quantity: number = 0;
  name = this.data.element.name;
  available_quantity = this.data.element.quantity;
  price = this.data.element.price;
  total_cost_label = Constants.Total_COST_LABEL;
  quantity_label = Constants.QUANTITY_LABEL;

  isValid(): boolean {
    if (this.quantity < 1 || this.quantity > this.available_quantity) {
      return false;
    } else {
      return true;
    }
  }

  cancel(): void {
    this.quantity = 0;
    this.errorMessage = '';
  }

  errorMessage = '';
  updateErrorMessage() {
    if (this.quantity < 1) {
      this.errorMessage = 'Please select minimum quantity';
    }

    if (this.quantity > this.available_quantity) {
      this.errorMessage = 'you cannot buy more than the available quantity';
    }
  }
}
