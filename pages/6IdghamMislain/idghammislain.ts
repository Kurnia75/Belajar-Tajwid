import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-IdghamMislain',
  templateUrl: 'idghammislain.html'
})
export class IdghamMislainPage {
 
  audio: any;
  text: any;
  play: any;
  icon: any;
  btn: any;

  constructor(public navCtrl: NavController) {
	this.audio = new Audio();
	this.audio.loop = false;
  }

  ngOnInit() {
    this.audio.src = '../assets/audio/8idghammislain.mp3';
    this.audio.load();
	this.play = false;
	this.text = 'Putar Suara';
	this.icon = 'play';
	this.btn = function(){
		this.text = 'Putar Suara';
		this.icon = 'play';
		this.play = false;
	};
	this.audio.addEventListener("ended", this.btn.bind(this), false);
  }

  playAudio() { 
	this.play = !this.play;
	if(this.play){
		this.audio.play();
		this.text = 'Berhenti';
		this.icon = 'pause';
	
	} else {
		this.audio.pause(); 
		this.text = 'Putar Suara';
		this.icon = 'play';
	}
  }

  ngOnDestroy() {
	if(this.audio) {
		this.audio.pause();
		this.audio = null;
    }
  }
}