import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './my-components/buy/buy.component';
import { CustomerComponent } from './my-components/customer/customer.component';
import { FormComponent } from './my-components/form/form.component';
import { InvalidComponent } from './my-components/invalid/invalid.component';
import { LoginComponent } from './my-components/login/login.component';
import { NavbarComponent } from './my-components/navbar/navbar.component';
import { SellerComponent } from './my-components/seller/seller.component';
import { SureComponent } from './my-components/sure/sure.component';
import { TableComponent } from './my-components/table/table.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SellerComponent,
    CustomerComponent,
    TableComponent,
    FormComponent,
    BuyComponent,
    SureComponent,
    InvalidComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
