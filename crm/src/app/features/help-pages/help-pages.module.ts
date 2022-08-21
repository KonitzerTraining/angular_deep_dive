import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpPagesRoutingModule } from './help-pages-routing.module';
import { HelpPagesIndexComponent } from './help-pages-index/help-pages-index.component';


@NgModule({
  declarations: [
    HelpPagesIndexComponent
  ],
  imports: [
    CommonModule,
    HelpPagesRoutingModule
  ]
})
export class HelpPagesModule { }
