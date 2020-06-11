import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:"admin",
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  
  },
  {
    path:"customer",
    loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)
   
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/customer"

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
