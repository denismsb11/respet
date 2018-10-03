import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConteudosIccPage } from '../conteudos-icc/conteudos-icc';
import { ConteudosGaPage } from '../conteudos-ga/conteudos-ga';
import { ConteudosMatDiscretaPage } from '../conteudos-mat-discreta/conteudos-mat-discreta';
import { ConteudosCalculo1Page } from '../conteudos-calculo1/conteudos-calculo1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  iccConteudos(){
    this.navCtrl.push(ConteudosIccPage)
  }

  gaConteudos(){
    this.navCtrl.push(ConteudosGaPage)
  }

  matDiscretaConteudos(){
    this.navCtrl.push(ConteudosMatDiscretaPage)
  }

  calculo1Conteudos(){
    this.navCtrl.push(ConteudosCalculo1Page)
  }

}