import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map, mergeMap, tap} from 'rxjs/operators';
import {Observable, EMPTY, of} from 'rxjs';
import * as AuthActions from '../actions/auth.actions';
import {AuthService} from "../../services/auth.service";
import {loginError, loginSuccess} from "../actions/auth.actions";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(AuthActions.login),
          mergeMap((action) => {
            return this.auth.getUser(action.login).pipe(
                map(user => {
                  console.log(user);
                  return AuthActions.loginSuccess({user})
                }),
                catchError(error => of(AuthActions.loginError({error}))))
            }
          )

        );
    }, /*{
      dispatch: false
    }*/);

    logout$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigateByUrl('/start');
        })
      );
    }, {
      dispatch: false
    })


  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}
}
