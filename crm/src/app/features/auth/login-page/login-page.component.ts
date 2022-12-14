import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {login} from "../store/actions/auth.actions";
import {Login} from "../model/login";
import {selectIsLoggedIn, selectIsLoggedOut, selectUserName} from "../store/selectors/auth.selectors";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {

  loginForm = this.fb.group({
    email: [
      'tim@example.com',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '12345678',
      [
        Validators.required]
    ]
  });

  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  isLoggedOut$ = this.store.select(selectIsLoggedOut);
  userName$ = this.store.select(selectUserName);

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  formSubmitHandler() {
    console.log(this.loginForm.value);

    this.store.dispatch(login({
      login: this.loginForm.value as Login
    }));
  }
}
