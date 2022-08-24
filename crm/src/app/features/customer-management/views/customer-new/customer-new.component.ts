import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../model/customer';
import { newCustomer } from '../../store/actions/customer.actions';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent {

  constructor(
    private store: Store
  ) { }

  createCustomer(customer: Omit<Customer, 'id'>) {
    this.store.dispatch(newCustomer({customer}));
  }
}
