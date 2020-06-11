import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"customer",
    component:CustomerComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path:'cart',
        component:CartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
