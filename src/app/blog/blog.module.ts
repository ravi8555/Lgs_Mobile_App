import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
export interface Blog{
  img: string;
  link: string;
  type:string;
  title: string;
  subtitle:string;
  types:string;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage]
})
export class BlogPageModule {}
