import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthtipsPage } from './healthtips';

@NgModule({
  declarations: [
    HealthtipsPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthtipsPage),
  ],
})
export class HealthtipsPageModule {}
