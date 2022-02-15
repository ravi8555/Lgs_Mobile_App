import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataInsidePage } from './data-inside.page';

const routes: Routes = [
  {
    path: '',
    component: DataInsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataInsidePageRoutingModule {}
