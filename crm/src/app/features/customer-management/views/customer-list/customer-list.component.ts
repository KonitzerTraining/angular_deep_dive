import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers: Customer[] = [];
  private loading: boolean = false;
  private errorMessage: string | null = null;

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
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
  }

  deleteCustomer(id: number) {

  }

}
