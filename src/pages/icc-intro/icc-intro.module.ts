import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IccIntroPage } from './icc-intro';

@NgModule({
  declarations: [
    IccIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IccIntroPage),
  ],
})
export class IccIntroPageModule {}
