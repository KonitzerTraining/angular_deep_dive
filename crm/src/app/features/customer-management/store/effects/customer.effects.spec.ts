import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import {CustomerEffects} from './customer.effects';
import {CustomerService} from "../../services/customer.service";
import {customerServiceMockFactory} from "../../../../../../mocks/services/customer.service";
import {customersMock} from "../../../../../../mocks/api/customers";
import {newCustomer} from "../actions/customer.actions";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import createSpyObj = jasmine.createSpyObj;
import {CustomerManagementIndexComponent} from "../../customer-management-index/customer-management-index.component";

fdescribe('CustomerEffects', () => {
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
    })
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
});
