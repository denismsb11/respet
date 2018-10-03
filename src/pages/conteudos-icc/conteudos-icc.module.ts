import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConteudosIccPage } from './conteudos-icc';

@NgModule({
  declarations: [
    ConteudosIccPage,
  ],
  imports: [
    IonicPageModule.forChild(ConteudosIccPage),
  ],
})
export class ConteudosIccPageModule {}
