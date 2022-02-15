import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CREATIVEPageRoutingModule } from './creative-routing.module';

import { CREATIVEPage } from './creative.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CREATIVEPageRoutingModule
  ],
  declarations: [CREATIVEPage]
})
export class CREATIVEPageModule {}
