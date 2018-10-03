import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calculo1DerivadasDefinicoesPage } from '../calculo1-derivadas-definicoes/calculo1-derivadas-definicoes';

@IonicPage()
@Component({
  selector: 'page-calculo1-derivadas',
  templateUrl: 'calculo1-derivadas.html',
})
export class Calculo1DerivadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calculo1DerivadasPage');
  }

  abrirDefinicoes(){
    this.navCtrl.push(Calculo1DerivadasDefinicoesPage)
  }

}
