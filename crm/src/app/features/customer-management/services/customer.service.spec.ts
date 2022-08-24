import {TestBed} from '@angular/core/testing';

import {CustomerService} from './customer.service';
import createSpyObj = jasmine.createSpyObj;
import {HttpClient} from "@angular/common/http";

fdescribe('CustomerService', () => {
  let service: CustomerService;
  let httpClientMock: any;

  beforeEach(() => {

    httpClientMock = createSpyObj('HttpClient', [
      'get', 'post', 'delete', 'put'
    ])

    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {

    it('should exist', () => {
      expect(service.getAll).toBeDefined();
    });
  });

  describe('getOne', () => {

    it('should exist', () => {
      expect(service.getOne).toBeDefined();
    });
  });

  describe('deleteOne', () => {

    it('should exist', () => {
      expect(service.deleteOne).toBeDefined();
    });
  });

  describe('postOne', () => {
    it('should exist', () => {
      expect(service.postOne).toBeDefined();
    });
  });

  describe('putOne', () => {

    it('should exist', () => {
      expect(service.putOne).toBeDefined();
    });
  });
});
