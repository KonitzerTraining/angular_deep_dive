import { createAction, props } from '@ngrx/store';
import {Login} from "../../model/login";
import {User} from "../../model/user";

export const login = createAction(
  '[Auth] Login',
  props<{login: Login}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{user: User}>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{error: Error}>()
);


