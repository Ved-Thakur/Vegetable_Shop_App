import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { FormComponent } from '../form/form.component';
import { BuyComponent } from '../buy/buy.component';
import { SureComponent } from '../sure/sure.component';

interface Product {
  group: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  @Input() userType: string = '';
  type: string = '';

  dataSource = new MatTableDataSource<Product>();
  displayedColumns: string[] = [
    'group',
    'name',
    'type',
    'quantity',
    'price',
    'action',
  ];

  ngOnInit(): void {
    this.dataSource.data = this.dataService.data;
  }

  delete(element: Product) {
    const pop = this.dialog.open(SureComponent, {
      width: '200px',
      height: '100px',
    });

    pop.disableClose = true;
    pop.afterClosed().subscribe((res) => {
      if (res) {
        const index = this.dataSource.data.indexOf(element);
        this.dataSource.data.splice(index, 1);
        this.dataService.storeData();
        this.dataSource.filter = '';
      }
    });
  }

  add() {
    var pop = this.dialog.open(FormComponent, {
      data: { isEdit: false },
    });
    pop.disableClose = true;
    pop.afterClosed().subscribe((res) => {
      if (res) {
        this.dataSource.data.push(res);
        this.dataService.storeData();
        this.dataSource.filter = '';
      }
    });
  }

  edit(element: Product) {
    const pop = this.dialog.open(FormComponent, {
      data: { isEdit: true, rowData: element },
    });

    pop.afterClosed().subscribe((res) => {
      if (res) {
        const index = this.dataSource.data.indexOf(element);
        this.dataSource.data[index] = res;
        this.dataService.storeData();
        this.dataSource.filter = '';
      }
    });
  }

  filter() {
    if (['regular', 'exotic', 'seasonal'].includes(this.type)) {
      this.dataSource.filter = this.type;
    } else {
      this.dataSource.filter = '';
    }
  }

  buy(element: Product) {
    const index = this.dataSource.data.indexOf(element);
    const pop = this.dialog.open(BuyComponent, {
      width: '300px',
      height: '320px',
      data: { element: element },
    });
    pop.disableClose = true;
    pop.afterClosed().subscribe((res) => {
      if (res) {
        this.dataSource.data[index]['quantity'] -= res;
        this.dataService.storeData();
      }
    });
  }
}
