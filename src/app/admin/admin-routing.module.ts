import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent 
      },
      {
        path:'register',
        component:RegisterComponent 
      },
      {
        path: 'product',
        loadChildren: './admin/product/product.module#ProductModule',
      },
      {
        path:'user',
        loadChildren:'./admin/user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
