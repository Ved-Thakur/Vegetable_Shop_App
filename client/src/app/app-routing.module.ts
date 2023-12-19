import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './my-components/login/login.component';
import { SellerComponent } from './my-components/seller/seller.component';
import { CustomerComponent } from './my-components/customer/customer.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'customer', component: CustomerComponent, data: { data: [] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
