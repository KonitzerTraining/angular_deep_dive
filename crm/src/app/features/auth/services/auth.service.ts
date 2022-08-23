import { Injectable } from '@angular/core';
import {Login} from "../model/login";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

const url = environment.api + 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getUser (login: Login): Observable<User> {
    return this.http.get<User>(url);
  }
}
