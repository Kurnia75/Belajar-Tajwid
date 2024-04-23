import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdghamMutamatsilainPage } from '../8IdghamMutamatsilain/idghammutamatsilain';
import { IdghamMutajanisainPage } from '../9IdghamMutajanisain/idghammutajanisain';
import { IdghamMutaqaribainPage } from '../10IdghamMutaqaribain/idghammutaqaribain';

@Component({
  selector: 'page-HukumIdgham',
  templateUrl: 'HukumIdgham.html'
})
export class HukumIdghamPage {

  constructor(public navCtrl: NavController) {

  }

  IdghamMutamatsilainPage(){
    this.navCtrl.push(IdghamMutamatsilainPage);
  }

  IdghamMutajanisainPage(){
    this.navCtrl.push(IdghamMutajanisainPage);
  }

  IdghamMutaqaribainPage(){
    this.navCtrl.push(IdghamMutaqaribainPage);
  }

}