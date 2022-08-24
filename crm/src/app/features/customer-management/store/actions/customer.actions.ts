import { createAction, props } from '@ngrx/store';
import { Customer } from '../../model/customer';

export const loadCustomers = createAction(
  '[Customers] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customers] Load Customers Success',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customers] Load Customers Failure',
  props<{ error: any }>()
);

export const newCustomer = createAction(
  '[Customers] New Customer',
  props<{ customer: Omit<Customer, 'id'>}>()
);

export const newCustomerSuccess = createAction(
  '[Customers] New Customer Success',
  props<{ customer: Customer}>()
);

export const newCustomerFailure = createAction(
  '[Customers] New Customer Failure',
  props<{ error: any }>()
);

export const editCustomer = createAction(
  '[Customers] Edit Customer',
  props<{ customer:Customer}>()
);

export const editCustomerSuccess = createAction(
  '[Customers] Edit Customer Success',
  props<{ customer: Customer}>()
);

export const editCustomerFailure = createAction(
  '[Customers] Edit Customer Failure',
  props<{ error: any }>()
);

export const deleteCustomer = createAction(
  '[Customers] Delete Customer',
  props<{ id: number}>()
);

export const deleteCustomerSuccess = createAction(
  '[Customers] Delete Customer Success',
);

export const deleteCustomerFailure = createAction(
  '[Customers] Delete Customer Failure',
  props<{ error: any }>()
);
