import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { SwiperModule } from 'swiper/angular';
export interface Sportlight{
  userImg:string;
  awardImg:string;
  content: string;
}
export interface Awards{
  awardImg:string;
  orgImg:string;
  content:string;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
