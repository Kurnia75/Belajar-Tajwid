import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MateriPage } from '../pages/Materi/materi';
import { NadhomPage } from '../pages/Nadhom/nadhom';
import { TentangPage } from '../pages/Tentang/tentang';
import { NunMatidanTanwinPage } from '../pages/NunMatidanTanwin/NunMatidanTanwin';
import { MimMatiPage } from '../pages/MimMati/MimMati';
import { HukumIdghamPage } from '../pages/HukumIdgham/HukumIdgham';
import { HukumMadPage } from '../pages/HukumMad/HukumMad';
import { HukumRaPage } from '../pages/HukumRa/HukumRa';
import { HukumLamPage } from '../pages/HukumLam/HukumLam';
import { NunMimTasydidPage } from '../pages/NunMimTasydid/NunMimTasydid';
import { QalqalahPage } from '../pages/Qalqalah/Qalqalah';
import { TandaTandaWaqafPage } from '../pages/TandaTandaWaqaf/TandaTandaWaqaf';
import { BacaanKhususPage } from '../pages/BacaanKhusus/BacaanKhusus';

import { IdzharPage } from '../pages/1Idzhar/idzhar';
import { IdghamPage } from '../pages/2Idgham/idgham';
import { IqlabPage } from '../pages/3Iqlab/iqlab';
import { IkhfaPage } from '../pages/4Ikhfa/ikhfa';

import { IkhfaSyafawiPage } from '../pages/5IkhfaSyafawi/ikhfasyafawi';
import { IdghamMislainPage } from '../pages/6IdghamMislain/idghammislain';
import { IdzharSyafawiPage } from '../pages/7IdzharSyafawi/idzharsyafawi';

import { IdghamMutamatsilainPage } from '../pages/8IdghamMutamatsilain/idghammutamatsilain';
import { IdghamMutajanisainPage } from '../pages/9IdghamMutajanisain/idghammutajanisain';
import { IdghamMutaqaribainPage } from '../pages/10IdghamMutaqaribain/idghammutaqaribain';

import { MadThobiiPage } from '../pages/11MadThobii/madthobii';
import { MadWMPage } from '../pages/12MadWM/madwm';
import { MadJMPage } from '../pages/13MadJM/madjm';
import { MadLPage } from '../pages/14MadL/madl';
import { MadBPage } from '../pages/15MadB/madb';
import { MadTPage } from '../pages/16MadT/madt';
import { MadIPage } from '../pages/17MadI/madi';
import { MadALPage } from '../pages/18MadAL/madal';
import { MadFPage } from '../pages/19MadF/madf';
import { MadSQPage } from '../pages/20MadSQ/madsq';
import { MadSTPage } from '../pages/21MadST/madst';
import { MadLMuthKPage } from '../pages/22MadLMuthK/madlmuthk';
import { MadLMukhKPage } from '../pages/23MadLMukhK/madlmukhk';
import { MadLMuthHPage } from '../pages/24MadLMuthH/madlmuthh';
import { MadLMukhHPage } from '../pages/25MadLMukhH/madlmukhh';

import { RaTafkhimPage } from '../pages/26RaTafkhim/ratafkhim';
import { RaTarqiqPage } from '../pages/27RaTarqiq/ratarqiq';
import { RaJWPage } from '../pages/28RaJW/rajw';

import { LamTarifPage } from '../pages/29LamTarif/lamtarif';
import { LafadzAJPage } from '../pages/30LafadzAJ/lafadzaj';

import { HamzahWasalPage } from '../pages/31HamzahWasal/hamzahwasal';
import { NunIwadhPage } from '../pages/32NunIwadh/nuniwadh';
import { IsymamPage } from '../pages/33Isymam/isymam';
import { ImalahPage } from '../pages/34Imalah/imalah';

import { Jilid1Page } from '../pages/35Jilid1/jilid1';
import { Jilid2Page } from '../pages/36Jilid2/jilid2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Materi', component: MateriPage },
      { title: 'Nadhom', component: NadhomPage },
      { title: 'Tentang', component: TentangPage },
      { title: 'Nun Mati dan Tanwin', component: NunMatidanTanwinPage },
      { title: 'Mim Mati', component: MimMatiPage },
      { title: 'Hukum Idgham', component: HukumIdghamPage },
      { title: 'Hukum Mad', component: HukumMadPage },
      { title: 'Hukum Ra', component: HukumRaPage },
      { title: 'Hukum Lam', component: HukumLamPage },
      { title: 'Nun / Mim Tasydid', component: NunMimTasydidPage },
      { title: 'Qalqalah', component: QalqalahPage },
      { title: 'Tanda-tanda Waqaf', component: TandaTandaWaqafPage },
      { title: 'Bacaan Khusus', component: BacaanKhususPage },
      { title: 'Nadhom Jilid 1', component: Jilid1Page },
      { title: 'Nadhom Jilid 2', component: Jilid2Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
