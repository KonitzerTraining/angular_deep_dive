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
      service.getOne(1);
      expect(httpClientMock.get).toHaveBeenCalled();
    })
  });

  describe('deleteOne', () => {

    it('should exist', () => {
      expect(service.deleteOne).toBeDefined();
    });

    it('should call http.delete', () => {
      service.deleteOne(1);
      expect(httpClientMock.delete).toHaveBeenCalled();
    })
  });

  describe('postOne', () => {
    it('should exist', () => {
      expect(service.postOne).toBeDefined();
    });
    it('should call http.post', () => {
      service.postOne({name: 'test', credit: 0});
      expect(httpClientMock.post).toHaveBeenCalled();
    })
  });

  describe('putOne', () => {

    it('should exist', () => {
      expect(service.putOne).toBeDefined();
    });

    it('should call http.put', () => {
      service.putOne({id: 1, name: 'test', credit: 0});
      expect(httpClientMock.putOne).toHaveBeenCalled();
    });
  });
});
