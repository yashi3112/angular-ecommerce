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
        loadChildren: () => import('./product/product.module').then(m=>m.ProductModule)
      },
      {
        path:'user',
        loadChildren:() => import('./user/user.module').then(m => m.UserModule)
      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
