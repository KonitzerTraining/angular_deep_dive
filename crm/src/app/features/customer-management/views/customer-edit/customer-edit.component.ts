import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  public customer!: Customer;

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.customer = this.activateRoute.snapshot.data['customer'];
  }

  updateCustomer(customerFromForm: Partial<Customer>) {
    const editedCustomer = {
      ...this.customer,
      ...customerFromForm
    };

    console.log(editedCustomer);
  }

}
