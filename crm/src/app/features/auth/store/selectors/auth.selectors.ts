import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) =>  !!auth.user
);

export const selectIsLoggedOut = createSelector(
  selectIsLoggedIn,
  (isLoggedIn) => !isLoggedIn
);

export const selectUserName = createSelector(
  selectAuthState,
  ({user}) => user?.name
);

