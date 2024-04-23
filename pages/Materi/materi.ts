import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NunMatidanTanwinPage } from '../NunMatidanTanwin/NunMatidanTanwin';
import { MimMatiPage } from '../MimMati/MimMati';
import { HukumIdghamPage } from '../HukumIdgham/HukumIdgham';
import { HukumMadPage } from '../HukumMad/HukumMad';
import { HukumRaPage } from '../HukumRa/HukumRa';
import { HukumLamPage } from '../HukumLam/HukumLam';
import { NunMimTasydidPage } from '../NunMimTasydid/NunMimTasydid';
import { QalqalahPage } from '../Qalqalah/Qalqalah';
import { TandaTandaWaqafPage } from '../TandaTandaWaqaf/TandaTandaWaqaf';
import { BacaanKhususPage } from '../BacaanKhusus/BacaanKhusus';

@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html'
})
export class MateriPage {

  constructor(public navCtrl: NavController) {

  }
  
  NunMatidanTanwinPage(){
    this.navCtrl.push(NunMatidanTanwinPage);
  }
  
  MimMatiPage(){
    this.navCtrl.push(MimMatiPage);
  }
  
  HukumIdghamPage(){
    this.navCtrl.push(HukumIdghamPage);
  }
  
  HukumMadPage(){
    this.navCtrl.push(HukumMadPage);
  }
  
  HukumRaPage(){
    this.navCtrl.push(HukumRaPage);
  }
  
  HukumLamPage(){
    this.navCtrl.push(HukumLamPage);
  }
  
  NunMimTasydidPage(){
    this.navCtrl.push(NunMimTasydidPage);
  }
  
  QalqalahPage(){
    this.navCtrl.push(QalqalahPage);
  }
  
  TandaTandaWaqafPage(){
    this.navCtrl.push(TandaTandaWaqafPage);
  }
  
  BacaanKhususPage(){
    this.navCtrl.push(BacaanKhususPage);
  }

}
