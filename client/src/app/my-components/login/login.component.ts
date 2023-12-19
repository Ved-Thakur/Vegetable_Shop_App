import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Constants from 'src/app/constants';
import { InvalidComponent } from '../invalid/invalid.component';

interface Product {
  group: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  role: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  onSubmit() {
    if (
      this.username == Constants.SELLER_USERNAME &&
      this.password == Constants.SELLER_PASSWORD &&
      this.role == 'seller'
    ) {
      this.router.navigate(['/seller']);
    } else if (
      this.username == Constants.CUSTOMER_USERNAME &&
      this.password == Constants.CUSTOMER_PASSWORD &&
      this.role == 'customer'
    ) {
      this.router.navigate(['/customer']);
    } else {
      this.dialog.open(InvalidComponent, {
        height: '100px',
      });
    }
  }
}
