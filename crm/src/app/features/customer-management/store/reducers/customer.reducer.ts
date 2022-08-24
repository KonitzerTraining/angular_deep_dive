import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../model/customer';
import * as CustomersActions from '../actions/customer.actions';
import * as AuthActions from '../../../auth/store/actions/auth.actions';

export const customerFeatureKey = 'customers';

export interface State {
  customerRecords: Customer[]
}

export const initialState: State = {
  customerRecords: []
};

export const reducer = createReducer(
  initialState,

  // on(CustomersActions.loadCustomers, state => state),
  on(CustomersActions.loadCustomersSuccess, (state, action) => {
    return {
      ...state,
      customerRecords: action.customers
    }
  }),

  on(AuthActions.logout, () => {
    return initialState
  }),

);
