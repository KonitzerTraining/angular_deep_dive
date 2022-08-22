import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExternalLinkComponent} from "./external-link/external-link.component";

const routes: Routes = [
  {
    path: 'external-link/:link',
    component: ExternalLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalLinkRoutingModule { }
