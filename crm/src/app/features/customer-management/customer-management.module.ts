import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementIndexComponent } from './customer-management-index/customer-management-index.component';


@NgModule({
  declarations: [
    CustomerManagementIndexComponent
  ],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule
  ]
})
export class CustomerManagementModule { }
