import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManagementIndexComponent } from './customer-management-index.component';

describe('CustomerManagementIndexComponent', () => {
  let component: CustomerManagementIndexComponent;
  let fixture: ComponentFixture<CustomerManagementIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerManagementIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerManagementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
