import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {authFeatureKey, reducer} from "./store/reducers/auth.reducer";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
