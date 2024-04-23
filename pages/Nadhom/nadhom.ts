import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Jilid1Page } from '../35Jilid1/jilid1';
import { Jilid2Page } from '../36Jilid2/jilid2';

@Component({
  selector: 'page-nadhom',
  templateUrl: 'nadhom.html'
})
export class NadhomPage {

  constructor(public navCtrl: NavController) {

  }

  Jilid1Page(){
    this.navCtrl.push(Jilid1Page);
  }

  Jilid2Page(){
    this.navCtrl.push(Jilid2Page);
  }

}
