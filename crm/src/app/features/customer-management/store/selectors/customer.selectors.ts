import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Customer } from '../../model/customer';
import * as fromCustomers from '../reducers/customer.reducer';

export const selectCustomersState = createFeatureSelector<fromCustomers.State>(
  fromCustomers.customerFeatureKey
);

export const selectCustomers = createSelector(
  selectCustomersState,
  (customersState) => {
    return customersState.customerRecords;
  }
);

export const selectCustomersCount = createSelector(
  selectCustomersState,
  (customersState) => {
    return customersState.customerRecords.length;
  }
);

export const selectCustomer = (id: number) => {
  console.log(id);
  return createSelector(
    selectCustomers,
    (customers) => {
      const match = customers.find((c) => {
        return c.id === id;
      });
      console.log(match);
      return match as Customer;
    }
  );
};
