import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeftPannelPageRoutingModule } from './left-pannel-routing.module';

import { LeftPannelPage } from './left-pannel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeftPannelPageRoutingModule
  ],
  declarations: [LeftPannelPage]
})
export class LeftPannelPageModule {}
