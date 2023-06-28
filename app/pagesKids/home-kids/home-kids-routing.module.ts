import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeKidsPage } from './home-kids.page';

const routes: Routes = [
  {
    path: '',
    component: HomeKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeKidsPageRoutingModule {}
