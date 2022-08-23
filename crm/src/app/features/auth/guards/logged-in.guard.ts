import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {selectIsLoggedIn} from "../store/selectors/auth.selectors";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {
  }
  canActivate(): Observable<boolean> {

    return this.store.select(selectIsLoggedIn).pipe(
      tap((loggedIn) => {
        if(!loggedIn) {
          this.router.navigateByUrl('/login')
        }
      })
    );
  }
}
