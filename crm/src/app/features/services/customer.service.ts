import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const url = environment.api + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(url);
  }

  getOne(id: number): Observable<Customer> {
    return this.http.get<Customer>(url + id);
  }

  deleteOne(id: number): Observable<any> {
    return this.http.delete(url + id);
  }

  postOne(customer: Omit<Customer, 'id'>): Observable<Customer> {
    return this.http.post<Customer>(url, customer);
  }

  putOne(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(url + customer.id, customer);
  }
}
