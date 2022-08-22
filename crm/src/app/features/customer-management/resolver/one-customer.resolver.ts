import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Customer} from "../model/customer";
import {CustomerService} from "../services/customer.service";

@Injectable({
  providedIn: 'root'
})
export class OneCustomerResolver implements Resolve<Customer> {

  constructor(private customerService: CustomerService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    console.log(route);
    console.log(state);

    return this.customerService.getOne(+route.params['id']);
  }
}
