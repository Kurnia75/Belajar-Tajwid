import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HamzahWasalPage } from '../31HamzahWasal/hamzahwasal';
import { NunIwadhPage } from '../32NunIwadh/nuniwadh';
import { IsymamPage } from '../33Isymam/isymam';
import { ImalahPage } from '../34Imalah/imalah';

@Component({
  selector: 'page-BacaanKhusus',
  templateUrl: 'BacaanKhusus.html'
})
export class BacaanKhususPage {

  constructor(public navCtrl: NavController) {

  }
  
  HamzahWasalPage(){
    this.navCtrl.push(HamzahWasalPage);
  }
  
  NunIwadhPage(){
    this.navCtrl.push(NunIwadhPage);
  }
  
  IsymamPage(){
    this.navCtrl.push(IsymamPage);
  }
  
  ImalahPage(){
    this.navCtrl.push(ImalahPage);
  }

}