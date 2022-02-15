import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CREATIVEPage } from './creative.page';

const routes: Routes = [
  {
    path: '',
    component: CREATIVEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CREATIVEPageRoutingModule {}
