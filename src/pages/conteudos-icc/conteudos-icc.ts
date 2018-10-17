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
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];

  }

  expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudosIccPage');
  }

  iccIntro() {
    this.navCtrl.push(IccIntroPage)
  }

  iccProgramacao() {
    this.navCtrl.push(IccProgramacaoPage)
  }



}
