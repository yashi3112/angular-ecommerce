import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './customer/home/home.component';
import { CartComponent } from './customer/cart/cart.component';


const routes: Routes = [
  {
    path:"admin",
    loadChildren:'./admin/admin.module#AdminModule'
  
  },
  {
    path:"customer",
    loadChildren:'./customer/customer.module#CustomerModule'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
