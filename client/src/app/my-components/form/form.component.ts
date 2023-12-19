import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isEdit: boolean;
  rowData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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

  onSubmit() {}
}
