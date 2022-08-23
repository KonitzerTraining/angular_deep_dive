import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {CoreModule} from "./core/core.module";
import {HelpPagesModule} from "./features/help-pages/help-pages.module";
import {StartPageModule} from "./features/start-page/start-page.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {CustomerManagementModule} from "./features/customer-management/customer-management.module";
import {ExternalLinkModule} from "./features/external-link/external-link.module";
import {AuthModule} from "./features/auth/auth.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,

    // Shared Modules
    CoreModule,

    // Feature Modules
    AuthModule,
    // HelpPagesModule, // Lazy Loading
    StartPageModule,
    CustomerManagementModule,
    ExternalLinkModule,

    // immer als letztes
    AppRoutingModule,

    StoreModule.forRoot({}, {}),

    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
