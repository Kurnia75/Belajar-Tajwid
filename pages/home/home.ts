import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MateriPage } from '../Materi/materi';
import { NadhomPage } from '../Nadhom/nadhom';
import { TentangPage } from '../Tentang/tentang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public alertShown:boolean = false;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }
  
  MateriPage(){
    this.navCtrl.push(MateriPage);
  }
  
  NadhomPage(){
    this.navCtrl.push(NadhomPage);
  }

  TentangPage(){
    this.navCtrl.push(TentangPage);
  }

  exitApp(){
     let alert = this.alertCtrl.create({
      title: 'Keluar',
      message: 'Yakin anda ingin keluar?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }
  
}
