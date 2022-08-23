import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
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
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.store.select(selectIsLoggedIn).pipe(
      tap((loggedIn) => {
        if(!loggedIn) {
          this.router.navigateByUrl('/login')
        }
      })
    );
  }

}
