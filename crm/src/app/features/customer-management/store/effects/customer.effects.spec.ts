import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustomerEffects } from './customer.effects';
import {CustomerService} from "../../services/customer.service";
import {customerServiceMockFactory} from "../../../../../../mocks/services/customer.service";

fdescribe('CustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: CustomerEffects;
  let customerServiceMock;

  beforeEach(() => {

    customerServiceMock = customerServiceMockFactory();
    TestBed.configureTestingModule({
      providers: [
        CustomerEffects,
        provideMockActions(() => actions$),
        {
         provide: CustomerService, useValue: customerServiceMock
        }
      ]
    });

    effects = TestBed.inject(CustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
