import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import {User} from "../../model/user";

export const authFeatureKey = 'auth';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, {user}): State =>
     ({
      ...state, // Spread, hier nicht nötig weil nur eine Prop
      user
    })
  ),
  on(AuthActions.logout, (state): State =>
    ({
      ...state, // Spread
      user: null
    })
  ),
);
