import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementIndexComponent } from './customer-management-index/customer-management-index.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './views/customer-detail/customer-detail.component';

import {HttpClientModule} from "@angular/common/http";
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/effects/customer.effects';
import {StoreModule} from "@ngrx/store";
import {customerFeatureKey, reducer} from "./store/reducers/customer.reducer";


@NgModule({
  declarations: [
    CustomerManagementIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    CustomerDetailComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomerManagementRoutingModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomerManagementModule { }
