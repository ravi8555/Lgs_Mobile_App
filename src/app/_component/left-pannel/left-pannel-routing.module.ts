import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftPannelPage } from './left-pannel.page';

const routes: Routes = [
  {
    path: '',
    component: LeftPannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeftPannelPageRoutingModule {}
