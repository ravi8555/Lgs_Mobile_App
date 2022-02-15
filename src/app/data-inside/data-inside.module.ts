import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataInsidePageRoutingModule } from './data-inside-routing.module';

import { DataInsidePage } from './data-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataInsidePageRoutingModule
  ],
  declarations: [DataInsidePage]
})
export class DataInsidePageModule {}
