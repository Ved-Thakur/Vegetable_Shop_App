import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, Product } from 'src/app/services/data.service';
import { BuyComponent } from '../buy/buy.component';
import { FormComponent } from '../form/form.component';
import { SureComponent } from '../sure/sure.component';
import { filter, switchMap, tap } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { ViewChild, AfterViewInit } from '@angular/core';

// interface Product {
//   group: string;
//   name: string;
//   type: string;
//   quantity: number;
//   price: number;
// }

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
  data: Product[];
  displayedColumns: string[] = [
    'group',
    'name',
    'type',
    'quantity',
    'price',
    'action',
  ];

  ngOnInit(): void {
    this.dataService.getAll().subscribe({
      next: (products: Product[]) => {
        this.data = products;
        this.dataSource.data = this.data;
      },
    });
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  delete(element: Product) {
    this.dialog
      .open(SureComponent, {
        width: '200px',
        height: '150px',
      })
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap(() => this.dataService.delete(element.id)),
        switchMap(() => this.dataService.getAll())
      )
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
        },
      });
  }

  add() {
    var pop = this.dialog.open(FormComponent, {
      data: { isEdit: false },
    });
    pop.disableClose = true;
    pop
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap((res) => this.dataService.create(res)),
        switchMap(() => this.dataService.getAll())
      )
      .subscribe({
        next: (data) => (this.dataSource.data = data),
      });
  }

  edit(element: Product) {
    const pop = this.dialog.open(FormComponent, {
      data: { isEdit: true, rowData: element },
    });

    pop
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap((res) => this.dataService.update(res, element.id)),
        switchMap(() => this.dataService.getAll())
      )
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
        },
      });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  buy(element: Product) {
    const index = this.dataSource.data.indexOf(element);
    const pop = this.dialog.open(BuyComponent, {
      width: '500px',
      height: '500px',
      data: { element: element },
    });
    pop.disableClose = true;
    pop
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap((res) =>
          this.dataService.update(
            {
              ...element,
              quantity: element.quantity - res,
            },
            element.id
          )
        ),
        switchMap(() => this.dataService.getAll())
      )
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
        },
      });
  }
}
