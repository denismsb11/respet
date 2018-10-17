import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IccIntroPage } from '../icc-intro/icc-intro';
import { IccProgramacaoPage } from '../icc-programacao/icc-programacao';

@IonicPage()
@Component({
  selector: 'page-conteudos-icc',
  templateUrl: 'conteudos-icc.html',
})
export class ConteudosIccPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudosIccPage');
  }

  iccIntro(){
    this.navCtrl.push(IccIntroPage)
  }
  
  iccProgramacao(){
    this.navCtrl.push(IccProgramacaoPage)
  }

}
