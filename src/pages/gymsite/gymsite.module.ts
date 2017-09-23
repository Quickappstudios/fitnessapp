import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymsitePage } from './gymsite';


@NgModule({
  declarations: [
    GymsitePage,
  ],
  imports: [
    IonicPageModule.forChild(GymsitePage),
  ],
})
export class GymsitePageModule {}
