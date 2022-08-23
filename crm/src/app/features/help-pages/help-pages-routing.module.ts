import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelpPagesIndexComponent} from "./help-pages-index/help-pages-index.component";

const routes: Routes = [
  {
    // path: 'help',
    path: '',
    component: HelpPagesIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpPagesRoutingModule { }
