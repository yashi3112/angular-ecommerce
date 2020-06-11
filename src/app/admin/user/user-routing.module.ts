import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from '../product/detail/detail.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:ListComponent
  },
  {
    path:"detail",
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
