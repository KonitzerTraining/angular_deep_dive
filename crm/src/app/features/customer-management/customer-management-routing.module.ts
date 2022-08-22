import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerManagementIndexComponent} from "./customer-management-index/customer-management-index.component";

const routes: Routes = [
  {
    path: 'customer-management',
    component: CustomerManagementIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
