import {Component} from '@angular/core';
// import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";
import { deleteCustomer, loadCustomers } from '../../store/actions/customer.actions';
import { selectCustomers } from '../../store/selectors/customer.selectors';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  /*public customers: Customer[] = [];
  private loading: boolean = false;
  private errorMessage: string | null = null;*/

  customers$ = this.store.select(selectCustomers);

  constructor(
    private store: Store
  ) { }

  reloadCustomers() {
    this.store.dispatch(loadCustomers());
  }

  deleteCustomer(id: number) {
    this.store.dispatch(deleteCustomer({id}));
  }
/*  ngOnInit(): void {
    this.loadCustomers();
  }*/

/*  loadCustomers() {
    this.loading = true;
    this.customerService.getAll()
      .subscribe({
        next: (customers  ) => {
          this.customers = customers;
          this.loading = false;
        },
        error: ({message}) => {
          this.errorMessage = message;
          this.loading = false;
        }
      })
  }*/

}
