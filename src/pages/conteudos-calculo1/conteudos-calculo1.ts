import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calculo1FuncoesPage } from '../calculo1-funcoes/calculo1-funcoes';
import { Calculo1LimitesPage } from '../calculo1-limites/calculo1-limites';
import { Calculo1DerivadasPage } from '../calculo1-derivadas/calculo1-derivadas';


@IonicPage()
@Component({
  selector: 'page-conteudos-calculo1',
  templateUrl: 'conteudos-calculo1.html',
})
export class ConteudosCalculo1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudosCalculo1Page');
  }

  calculo1Funcoes(){
    this.navCtrl.push(Calculo1FuncoesPage)
  }
  
  calculo1Limites(){
    this.navCtrl.push(Calculo1LimitesPage)
  }

  calculo1Derivadas(){
    this.navCtrl.push(Calculo1DerivadasPage)
  }



}
