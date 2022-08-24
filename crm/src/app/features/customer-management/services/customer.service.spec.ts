import {TestBed} from '@angular/core/testing';

import {CustomerService} from './customer.service';
import createSpyObj = jasmine.createSpyObj;
import {HttpClient} from "@angular/common/http";
import {customersMock} from "../../../../../mocks/api/customers";

describe('CustomerService', () => {
  let service: CustomerService;
  let httpClientMock: any;

  beforeEach(() => {

    httpClientMock = createSpyObj('HttpClient', [
      'get', 'post', 'delete', 'put'
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock
        }
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

    it('should call http.get', () => {
      service.getAll();
      expect(httpClientMock.get).toHaveBeenCalled();
    })
  });

  describe('getOne', () => {

    it('should exist', () => {
      expect(service.getOne).toBeDefined();
    });

    it('should call http.get', () => {
      service.getOne(customersMock[0].id);
      expect(httpClientMock.get).toHaveBeenCalled();
    })
  });

  describe('deleteOne', () => {

    it('should exist', () => {
      expect(service.deleteOne).toBeDefined();
    });

    it('should call http.delete', () => {
      service.deleteOne(customersMock[0].id);
      expect(httpClientMock.delete).toHaveBeenCalled();
    })
  });

  describe('postOne', () => {
    it('should exist', () => {
      expect(service.postOne).toBeDefined();
    });
    it('should call http.post', () => {
      service.postOne(customersMock[0]);
      expect(httpClientMock.post).toHaveBeenCalled();
    })
  });

  describe('putOne', () => {

    it('should exist', () => {
      expect(service.putOne).toBeDefined();
    });

    it('should call http.put', () => {
      service.putOne(customersMock[0]);
      expect(httpClientMock.put).toHaveBeenCalled();
    });
  });
});
