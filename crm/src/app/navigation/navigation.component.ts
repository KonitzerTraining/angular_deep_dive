import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {logout} from "../features/auth/store/actions/auth.actions";
import {selectIsLoggedIn, selectIsLoggedOut} from "../features/auth/store/selectors/auth.selectors";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent  {

  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  isLoggedOut$ = this.store.select(selectIsLoggedOut);

  constructor(
    private store: Store
  ) { }

  logout() {
    this.store.dispatch(logout());
  }
}
