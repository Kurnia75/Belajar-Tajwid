import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriPage,
    NadhomPage,
    TentangPage,
    NunMatidanTanwinPage,
    MimMatiPage,
    HukumIdghamPage,
    HukumMadPage,
    HukumRaPage,
    HukumLamPage,
    NunMimTasydidPage,
    QalqalahPage,
    TandaTandaWaqafPage,
    BacaanKhususPage,
    IdzharPage,
    IdghamPage,
    IqlabPage,
    IkhfaPage,
    IkhfaSyafawiPage,
    IdghamMislainPage,
    IdzharSyafawiPage,
    IdghamMutamatsilainPage,
    IdghamMutajanisainPage,
    IdghamMutaqaribainPage,
    MadThobiiPage,
    MadWMPage,
    MadJMPage,
    MadLPage,
    MadBPage,
    MadTPage,
    MadIPage,
    MadALPage,
    MadFPage,
    MadSQPage,
    MadSTPage,
    MadLMuthKPage,
    MadLMukhKPage,
    MadLMuthHPage,
    MadLMukhHPage,
    RaTafkhimPage,
    RaTarqiqPage,
    RaJWPage,
    LamTarifPage,
    LafadzAJPage,
    HamzahWasalPage,
    NunIwadhPage,
    IsymamPage,
    ImalahPage,
    Jilid1Page,
    Jilid2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriPage,
    NadhomPage,
    TentangPage,
    NunMatidanTanwinPage,
    MimMatiPage,
    HukumIdghamPage,
    HukumMadPage,
    HukumRaPage,
    HukumLamPage,
    NunMimTasydidPage,
    QalqalahPage,
    TandaTandaWaqafPage,
    BacaanKhususPage,
    IdzharPage,
    IdghamPage,
    IqlabPage,
    IkhfaPage,
    IkhfaSyafawiPage,
    IdghamMislainPage,
    IdzharSyafawiPage,
    IdghamMutamatsilainPage,
    IdghamMutajanisainPage,
    IdghamMutaqaribainPage,
    MadThobiiPage,
    MadWMPage,
    MadJMPage,
    MadLPage,
    MadBPage,
    MadTPage,
    MadIPage,
    MadALPage,
    MadFPage,
    MadSQPage,
    MadSTPage,
    MadLMuthKPage,
    MadLMukhKPage,
    MadLMuthHPage,
    MadLMukhHPage,
    RaTafkhimPage,
    RaTarqiqPage,
    RaJWPage,
    LamTarifPage,
    LafadzAJPage,
    HamzahWasalPage,
    NunIwadhPage,
    IsymamPage,
    ImalahPage,
    Jilid1Page,
    Jilid2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}