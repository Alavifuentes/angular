import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
