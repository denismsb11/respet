import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatDiscretaSeEntaoPage } from '../mat-discreta-se-entao/mat-discreta-se-entao';

@IonicPage()
@Component({
  selector: 'page-conteudos-mat-discreta',
  templateUrl: 'conteudos-mat-discreta.html',
})
export class ConteudosMatDiscretaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudosMatDiscretaPage');
  }

  abrirSeEntao(){
    this.navCtrl.push(MatDiscretaSeEntaoPage)
  }

}
