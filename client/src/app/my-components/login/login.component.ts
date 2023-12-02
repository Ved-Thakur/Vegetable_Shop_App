import { Component } from '@angular/core';

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

  onSubmit() {
    console.log('hii' + this.username, this.password, this.role);
  }
}
