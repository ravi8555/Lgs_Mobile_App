import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinarPageRoutingModule } from './webinar-routing.module';

import { WebinarPage } from './webinar.page';
import { DownloadDirective } from "./../_directive/download.directive";
import { HttpClientModule } from "@angular/common/http";
export interface webinar{
  title:string;
  img:string;
  link:string;
  
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebinarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [WebinarPage, DownloadDirective ]
})
export class WebinarPageModule {}
