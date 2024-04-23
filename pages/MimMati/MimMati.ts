import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IkhfaSyafawiPage } from '../5IkhfaSyafawi/ikhfasyafawi';
import { IdghamMislainPage } from '../6IdghamMislain/idghammislain';
import { IdzharSyafawiPage } from '../7IdzharSyafawi/idzharsyafawi';

@Component({
  selector: 'page-MimMati',
  templateUrl: 'MimMati.html'
})
export class MimMatiPage {

  constructor(public navCtrl: NavController) {

  }

  IkhfaSyafawiPage(){
    this.navCtrl.push(IkhfaSyafawiPage);
  }

  IdghamMislainPage(){
    this.navCtrl.push(IdghamMislainPage);
  }

  IdzharSyafawiPage(){
    this.navCtrl.push(IdzharSyafawiPage);
  }

}