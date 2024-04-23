import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdzharPage } from '../1Idzhar/idzhar';
import { IdghamPage } from '../2Idgham/idgham';
import { IqlabPage } from '../3Iqlab/iqlab';
import { IkhfaPage } from '../4Ikhfa/ikhfa';

@Component({
  selector: 'page-NunMatidanTanwin',
  templateUrl: 'NunMatidanTanwin.html'
})
export class NunMatidanTanwinPage {

  constructor(public navCtrl: NavController) {

  }
  
  IdzharPage(){
    this.navCtrl.push(IdzharPage);
  }

  IdghamPage(){
    this.navCtrl.push(IdghamPage);
  }

  IqlabPage(){
    this.navCtrl.push(IqlabPage);
  }

  IkhfaPage(){
    this.navCtrl.push(IkhfaPage);
  }

}