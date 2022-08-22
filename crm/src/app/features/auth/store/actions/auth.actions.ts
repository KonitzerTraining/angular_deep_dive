import { createAction, props } from '@ngrx/store';
import {Login} from "../../model/login";

export const login = createAction(
  '[Auth] Login',
  props<{login: Login}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success'
);

export const loginError = createAction(
  '[Auth] Login Error'
);


