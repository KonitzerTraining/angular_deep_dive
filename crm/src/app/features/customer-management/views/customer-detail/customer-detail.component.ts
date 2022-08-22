import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  public customer !: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.customerService.getOne(+params['id'])
        })
      )
      .subscribe((customer) => {
        this.customer = customer;
      })
  }

}
