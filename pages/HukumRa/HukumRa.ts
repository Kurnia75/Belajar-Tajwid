import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RaTafkhimPage } from '../26RaTafkhim/ratafkhim';
import { RaTarqiqPage } from '../27RaTarqiq/ratarqiq';
import { RaJWPage } from '../28RaJW/rajw';

@Component({
  selector: 'page-HukumRa',
  templateUrl: 'HukumRa.html'
})
export class HukumRaPage {

  constructor(public navCtrl: NavController) {

  }

  RaTafkhimPage(){
    this.navCtrl.push(RaTafkhimPage);
  }

  RaTarqiqPage(){
    this.navCtrl.push(RaTarqiqPage);
  }

  RaJWPage(){
    this.navCtrl.push(RaJWPage);
  }

}