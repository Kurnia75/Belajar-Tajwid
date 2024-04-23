import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-Idgham',
  templateUrl: 'idgham.html'
})
export class IdghamPage {
  
  audio: any;
  text1: any;
  text2: any;
  text3: any;
  icon1: any;
  icon2: any;
  icon3: any;
  play1: any;
  play2: any;
  play3: any;
  btn: any;

  constructor(public navCtrl: NavController) {
	this.audio = new Audio();
	this.audio.loop = false;
  }

  ngOnInit() {
	this.text1 = 'Putar Suara';
	this.text2 = 'Putar Suara';
	this.text3 = 'Putar Suara';
	this.icon1 = 'play';
	this.icon2 = 'play';
	this.icon3 = 'play';
  	this.play1 = false;
  	this.play2 = false;
  	this.play3 = false;
	this.btn = function(){
		this.text1 = 'Putar Suara';
		this.icon1 = 'play';
		this.play1 = false;
		this.text2 = 'Putar Suara';
		this.icon2 = 'play';
		this.play2 = false;
		this.text3 = 'Putar Suara';
		this.icon3 = 'play';
		this.play3 = false;
	};
	this.audio.addEventListener("ended", this.btn.bind(this), false);
  }

  playAudio1() { 
  	this.audio.pause();
  	this.text1 = 'Putar Suara';
	this.icon1 = 'play';
  	this.play2 = false ;
  	this.play3 = false ;
    this.audio.src = '../assets/audio/3idghambilaghunnah.mp3';
    this.audio.load();
	this.play1 = !this.play1;

	if(this.play1){
		this.play1 = true;
		this.audio.play();
		this.icon1 = 'pause';
		this.text1 = 'Berhenti';
		this.text2 = 'Putar Suara';
		this.icon2 = 'play';
		this.text3 = 'Putar Suara';
		this.icon3 = 'play';
	} else {
		this.audio.pause();
		this.play1 = false ; 
		this.text1 = 'Putar Suara';
		this.text2 = 'Putar Suara';
		this.text3 = 'Putar Suara';
		this.icon1 = 'play';
		this.icon2 = 'play';
		this.icon3 = 'play';
	}
  }

  playAudio2() { 
  	this.audio.pause();
  	this.text2 = 'Putar Suara';
	this.icon2 = 'play';
	this.play1 = false ;
	this.play3 = false ;
    this.audio.src = '../assets/audio/2idghambighunnah.mp3';
    this.audio.load();
	this.play2 = !this.play2;

	if(this.play2){
		this.play2 = true;
		this.audio.play();
		this.text1 = 'Putar Suara';
		this.icon1 = 'play';
		this.text2 = 'Berhenti';
		this.icon2 = 'pause';
		this.text3 = 'Putar Suara';
		this.icon2 = 'play';
	} else {
		this.audio.pause();
		this.play2 = false ; 
		this.text1 = 'Putar Suara';
		this.text2 = 'Putar Suara';
		this.text3 = 'Putar Suara';
		this.icon1 = 'play';
		this.icon2 = 'play';
		this.icon3 = 'play';
	}
  }

  playAudio3() { 
  	this.audio.pause();
  	this.text3 = 'Putar Suara';
  	this.icon3 = 'play';
	this.play1 = false ;
	this.play2 = false ;
    this.audio.src = '../assets/audio/4idghampengecualian.mp3';
    this.audio.load();
	this.play3 = !this.play3;

	if(this.play3){
		this.play3 = true;
		this.audio.play();
		this.text1 = 'Putar Suara';
		this.icon1 = 'play';
		this.text2 = 'Putar Suara';
		this.icon2 = 'play';
		this.text3 = 'Berhenti';
		this.icon3 = 'pause';
	} else {
		this.audio.pause();
		this.play3 = false ; 
		this.text1 = 'Putar Suara';
		this.text2 = 'Putar Suara';
		this.text3 = 'Putar Suara';
		this.icon2 = 'play';
		this.icon2 = 'play';
		this.icon2 = 'play';
	}
  }

  ngOnDestroy() {
	if(this.audio) {
		this.audio.pause();
		this.audio = null;
    }
  }
}