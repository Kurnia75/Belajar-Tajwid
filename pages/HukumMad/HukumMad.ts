import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MadThobiiPage } from '../11MadThobii/madthobii';
import { MadWMPage } from '../12MadWM/madwm';
import { MadJMPage } from '../13MadJM/madjm';
import { MadLPage } from '../14MadL/madl';
import { MadBPage } from '../15MadB/madb';
import { MadTPage } from '../16MadT/madt';
import { MadIPage } from '../17MadI/madi';
import { MadALPage } from '../18MadAL/madal';
import { MadFPage } from '../19MadF/madf';
import { MadSQPage } from '../20MadSQ/madsq';
import { MadSTPage } from '../21MadST/madst';
import { MadLMuthKPage } from '../22MadLMuthK/madlmuthk';
import { MadLMukhKPage } from '../23MadLMukhK/madlmukhk';
import { MadLMuthHPage } from '../24MadLMuthH/madlmuthh';
import { MadLMukhHPage } from '../25MadLMukhH/madlmukhh';

@Component({
  selector: 'page-HukumMad',
  templateUrl: 'HukumMad.html'
})
export class HukumMadPage {

  constructor(public navCtrl: NavController) {

  }
  
  MadThobiiPage(){
    this.navCtrl.push(MadThobiiPage);
  }
  
  MadWMPage(){
    this.navCtrl.push(MadWMPage);
  }
  
  MadJMPage(){
    this.navCtrl.push(MadJMPage);
  }
  
  MadLPage(){
    this.navCtrl.push(MadLPage);
  }
  
  MadBPage(){
    this.navCtrl.push(MadBPage);
  }
  
  MadTPage(){
    this.navCtrl.push(MadTPage);
  }
  
  MadIPage(){
    this.navCtrl.push(MadIPage);
  } 

  MadALPage(){
    this.navCtrl.push(MadALPage);
  }

  MadFPage(){
    this.navCtrl.push(MadFPage);
  }

  MadSQPage(){
    this.navCtrl.push(MadSQPage);
  }

  MadSTPage(){
    this.navCtrl.push(MadSTPage);
  }

  MadLMuthKPage(){
    this.navCtrl.push(MadLMuthKPage);
  }

  MadLMukhKPage(){
    this.navCtrl.push(MadLMukhKPage);
  }

  MadLMuthHPage(){
    this.navCtrl.push(MadLMuthHPage);
  }

  MadLMukhHPage(){
    this.navCtrl.push(MadLMukhHPage);
  }

}