import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LamTarifPage } from '../29LamTarif/lamtarif';
import { LafadzAJPage } from '../30LafadzAJ/lafadzaj';

@Component({
  selector: 'page-HukumLam',
  templateUrl: 'HukumLam.html'
})
export class HukumLamPage {

  constructor(public navCtrl: NavController) {

  }

  LamTarifPage(){
    this.navCtrl.push(LamTarifPage);
  }

  LafadzAJPage(){
    this.navCtrl.push(LafadzAJPage);
  }

}