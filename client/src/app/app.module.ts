import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './my-components/login/login.component';
import { NavbarComponent } from './my-components/navbar/navbar.component';
import { SellerComponent } from './my-components/seller/seller.component';
import { CustomerComponent } from './my-components/customer/customer.component';
import { TableComponent } from './my-components/table/table.component';
import { FormComponent } from './my-components/form/form.component';
import { DataService } from './services/data.service';
import { BuyComponent } from './my-components/buy/buy.component';
import { SureComponent } from './my-components/sure/sure.component';
import { InvalidComponent } from './my-components/invalid/invalid.component';

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
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
