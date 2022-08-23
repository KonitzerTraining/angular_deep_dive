import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {logout} from "../features/auth/store/actions/auth.actions";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent  {

  constructor(
    private store: Store
  ) { }

  logout() {
    this.store.dispatch(logout());
  }
}
