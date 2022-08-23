import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {environment} from "../environments/environment";

const routes: Routes = [
  {
    path: 'help',
    loadChildren: () => {
      // ES2020
      return import('./features/help-pages/help-pages.module').then((m) => {
        return m.HelpPagesModule;
      });
    }
  },
  {
    path: '**',  // Wildcard, catched alle Routen
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: !environment.production
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
