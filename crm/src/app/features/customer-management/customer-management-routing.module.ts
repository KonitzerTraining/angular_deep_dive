import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerManagementIndexComponent} from "./customer-management-index/customer-management-index.component";
import {CustomerListComponent} from "./views/customer-list/customer-list.component";
import {CustomerEditComponent} from "./views/customer-edit/customer-edit.component";
import {CustomerDetailComponent} from "./views/customer-detail/customer-detail.component";
import {CustomerNewComponent} from "./views/customer-new/customer-new.component";
import {OneCustomerResolver} from "./resolver/one-customer.resolver";
import {LoggedInGuard} from "../auth/guards/logged-in.guard";

const routes: Routes = [
  {
    path: 'customer-management',
    component: CustomerManagementIndexComponent,
    canActivate: [
      LoggedInGuard
    ],
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'edit/:id',
        component: CustomerEditComponent,
        resolve: {
          customer: OneCustomerResolver
        }
      },
      {
        path: 'detail/:id',
        component: CustomerDetailComponent,

      },
      {
        path: 'new',
        component: CustomerNewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
