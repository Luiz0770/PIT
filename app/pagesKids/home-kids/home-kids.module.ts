import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeKidsPageRoutingModule } from './home-kids-routing.module';

import { HomeKidsPage } from './home-kids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeKidsPageRoutingModule
  ],
  declarations: [HomeKidsPage]
})
export class HomeKidsPageModule {}
