import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm';

  constructor(
    private router: Router
  ) {

    if(!environment.production) {
    this.router.events
      .pipe(
        filter((event) => {
          return (event instanceof NavigationStart)
        })
      )
      .subscribe((event) => {
          console.log(event);
        }
      )
    }
  }
}
