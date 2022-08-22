import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementIndexComponent } from './customer-management-index/customer-management-index.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './views/customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    CustomerManagementIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule
  ]
})
export class CustomerManagementModule { }
