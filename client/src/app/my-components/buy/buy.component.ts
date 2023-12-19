import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  isValid(): boolean {
    if (this.quantity < 1 || this.quantity > this.available_quantity) {
      return false;
    } else {
      return true;
    }
  }
}
