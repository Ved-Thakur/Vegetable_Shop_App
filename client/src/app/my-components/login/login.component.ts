import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Constants from 'src/app/constants';
import { AuthService } from 'src/app/services/auth.service';

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

  errorMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  displayError(): void {
    if (!this.username) {
      this.errorMessage = 'Please enter username';
    } else if (!this.password) {
      this.errorMessage = 'Please enter password';
    } else if (!this.role) {
      this.errorMessage = 'please select role';
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }

  onSubmit() {
    if (
      this.username == Constants.SELLER_USERNAME &&
      this.password == Constants.SELLER_PASSWORD &&
      this.role == 'seller'
    ) {
      this.authService.login('seller');
      this.router.navigate(['/seller']);
    } else if (
      this.username == Constants.CUSTOMER_USERNAME &&
      this.password == Constants.CUSTOMER_PASSWORD &&
      this.role == 'customer'
    ) {
      this.authService.login('customer');
      this.router.navigate(['/customer']);
    } else {
      this.displayError();
    }
  }
}
