import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutAppPageRoutingModule } from './about-app-routing.module';

import { AboutAppPage } from './about-app.page';

import { SwiperModule } from 'swiper/angular';
export interface setsup{
  title:string;
  text:string;
  
}
export interface teamarr{
  imgUser: string;
  name: string;
  desi: string;
  indipage: string;
  linkin: string;
}
export interface GooglePartner{
  title: string;
  text: string;
  logoImg: string;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutAppPageRoutingModule,
    SwiperModule
  ],
  declarations: [AboutAppPage]
})
export class AboutAppPageModule {}
