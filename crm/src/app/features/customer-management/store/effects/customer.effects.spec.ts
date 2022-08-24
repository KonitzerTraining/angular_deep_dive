import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of, throwError} from 'rxjs';

import {CustomerEffects} from './customer.effects';
import {CustomerService} from "../../services/customer.service";
import {customerServiceMockFactory} from "../../../../../../mocks/services/customer.service";
import {customersMock} from "../../../../../../mocks/api/customers";
import {newCustomer} from "../actions/customer.actions";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import createSpyObj = jasmine.createSpyObj;
import {CustomerManagementIndexComponent} from "../../customer-management-index/customer-management-index.component";

describe('CustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: CustomerEffects;
  let customerServiceMock: any;

  beforeEach(() => {
    customerServiceMock = customerServiceMockFactory();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: 'customer-management',
              component: CustomerManagementIndexComponent
            }
            ]
        )
      ],
      providers: [
        CustomerEffects,
        provideMockActions(() => actions$),
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    });

    effects = TestBed.inject(CustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loginSuccess$', () => {
    it('should dispatch loadCustomers', () => {
      actions$ = of({type: '[Auth] Login Success'});

      effects.loginSuccess$.subscribe(action => {
        expect(action).toEqual({
          type: '[Customers] Load Customers'
        })
      })
    })
  });

  describe('loadCustomers$', () => {
    it('should load from customerService', () => {
      actions$ = of({type: '[Customers] Load Customers'});

      effects.loadCustomers$.subscribe(action => {
        expect(customerServiceMock.getAll).toHaveBeenCalled();
        expect(action).toEqual({
          type: '[Customers] Load Customers Success',
          customers: customersMock
        })
      })
    })

    it('should throw Error', () => {
      const errorMessage = 'Server Down';

      customerServiceMock.getAll.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });

      actions$ = of({type: '[Customers] Load Customers'});

      effects.loadCustomers$.subscribe(action => {
        expect(customerServiceMock.getAll).toHaveBeenCalled();
        expect(action).toEqual({
          type: '[Customers] Load Customers Failure',
          error: new Error(errorMessage)
        })
      })
    });
  });

  describe('newCustomer$', () => {
    it('should create with customerService.postOne', () => {
      actions$ = of({
        type: '[Customers] New Customer',
        customer: customersMock[0]
      });

      effects.newCustomer$.subscribe(action => {

        expect(customerServiceMock.postOne).toHaveBeenCalled();

        expect(action).toEqual({
          type: '[Customers] New Customer Success',
          customer: customersMock[0]
        })
      })
    });

    it('should throw Error', () => {
      const errorMessage = 'Server Down';

      customerServiceMock.postOne.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });

      actions$ = of({type: '[Customers] New Customer'});

      effects.newCustomer$.subscribe(action => {
        expect(customerServiceMock.postOne).toHaveBeenCalled();
        expect(action).toEqual({
          type: '[Customers] New Customer Failure',
          error: new Error(errorMessage)
        })
      })
    });
  });

  describe('newCustomerSuccess$', () => {
    it('should navigate and dispatch loadCustomers', () => {
      actions$ = of({
        type: '[Customers] New Customer Success',
        customer: customersMock[0]
      });

      effects.newCustomerSuccess$.subscribe(action => {

        expect(action).toEqual({
          type: '[Customers] Load Customers',
        })
      })
    })
  });

  describe('editCustomer$', () => {
    it('should create with customerService.putOne', () => {
      actions$ = of({
        type: '[Customers] Edit Customer',
        customer: customersMock[0]
      });

      effects.editCustomer$.subscribe(action => {

        expect(customerServiceMock.putOne).toHaveBeenCalled();

        expect(action).toEqual({
          type: '[Customers] Edit Customer Success',
          customer: customersMock[0]
        })
      })
    });

    it('should throw Error', () => {
      const errorMessage = 'Server Down';

      customerServiceMock.putOne.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });

      actions$ = of({type: '[Customers] Edit Customer'});

      effects.editCustomer$.subscribe(action => {
        expect(customerServiceMock.putOne).toHaveBeenCalled();
        expect(action).toEqual({
          type: '[Customers] Edit Customer Failure',
          error: new Error(errorMessage)
        })
      })
    });
  });

  describe('editCustomerSuccess$', () => {
    it('should navigate and dispatch loadCustomers', () => {
      actions$ = of({
        type: '[Customers] Edit Customer Success',
        customer: customersMock[0]
      });

      effects.editCustomerSuccess$.subscribe(action => {

        expect(action).toEqual({
          type: '[Customers] Load Customers',
        })
      })
    })
  });

  describe('deleteCustomer$', () => {
    it('should delete with customerService.deleteOne', () => {
      actions$ = of({
        type: '[Customers] Delete Customer',
        customer: customersMock[0]
      });

      effects.deleteCustomer$.subscribe(action => {

        expect(customerServiceMock.deleteOne).toHaveBeenCalled();

        expect(action).toEqual({
          type: '[Customers] Delete Customer Success',
        })
      })
    });

    it('should throw Error', () => {
      const errorMessage = 'Server Down';

      customerServiceMock.deleteOne.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });

      actions$ = of({type: '[Customers] Delete Customer'});

      effects.deleteCustomer$.subscribe(action => {
        expect(customerServiceMock.deleteOne).toHaveBeenCalled();
        expect(action).toEqual({
          type: '[Customers] Delete Customer Failure',
          error: new Error(errorMessage)
        })
      })
    });
  });

  describe('deleteCustomerSuccess$', () => {
    it('should navigate and dispatch loadCustomers', () => {
      actions$ = of({
        type: '[Customers] Delete Customer Success',
        customer: customersMock[0]
      });

      effects.deleteCustomerSuccess$.subscribe(action => {

        expect(action).toEqual({
          type: '[Customers] Load Customers',
        })
      })
    })
  });
});
