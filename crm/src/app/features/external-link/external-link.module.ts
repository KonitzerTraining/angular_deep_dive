import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalLinkRoutingModule } from './external-link-routing.module';
import {ExternalLinkComponent} from "./external-link/external-link.component";


@NgModule({
  declarations: [
    ExternalLinkComponent
  ],
  imports: [
    CommonModule,
    ExternalLinkRoutingModule
  ]
})
export class ExternalLinkModule { }
