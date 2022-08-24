import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CustomersActions from '../actions/customer.actions';
import * as AuthActions from '../../../auth/store/actions/auth.actions';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Injectable()
export class CustomerEffects {

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.loginSuccess),
      map(() =>
        CustomersActions.loadCustomers()
      )
    );
  });

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.loadCustomers),
      concatMap(() =>
        this.customerService.getAll().pipe(
          map(customers => CustomersActions.loadCustomersSuccess({ customers })),
          catchError(error => of(CustomersActions.loadCustomersFailure({ error }))))
      )
    );
  });

  newCustomer$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.newCustomer),
      /*
      tap((action) => {
        console.log(action)
      }),
      */
      concatMap((action) =>
        this.customerService.postOne(action.customer).pipe(
          map(customer => CustomersActions.newCustomerSuccess({ customer })),
          catchError(error => of(CustomersActions.newCustomerFailure({ error }))))
      )
    );
  });

  newCustomerSuccess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.newCustomerSuccess),
      map(() => {
        this.router.navigateByUrl("/customer-management");
        return CustomersActions.loadCustomers();
      }));

  });

  editCustomer$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.editCustomer),
      tap((action) => {
        console.log(action)
      }),

      concatMap((action) =>
        this.customerService.putOne(action.customer).pipe(
          map(customer => CustomersActions.editCustomerSuccess({ customer })),
          catchError(error => of(CustomersActions.editCustomerFailure({ error }))))
      )
    );
  });

  editCustomerSuccess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.editCustomerSuccess),
      map(() => {
        this.router.navigateByUrl("/customer-management");
        return CustomersActions.loadCustomers();
      }));
  });

  deleteCustomer$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CustomersActions.deleteCustomer),
      tap((action) => {
        console.log(action)
      }),

      concatMap((action) =>
        this.customerService.deleteOne(action.id).pipe(
          map(() => CustomersActions.deleteCustomerSuccess()),
          catchError(error => of(CustomersActions.deleteCustomerFailure({ error }))))
      )
    );
  });

  deleteCustomerSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.deleteCustomerSuccess),
      map(() => {
        return CustomersActions.loadCustomers();
      }));
  });

  constructor(
    private customerService: CustomerService,
    private actions$: Actions,
    private router: Router
  ) { }
}
