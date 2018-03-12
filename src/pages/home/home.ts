import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController) {
     
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.autoplay = 3000;
    this.slides.loop=true;
  }
  ionViewWillEnter(){
     
  }

}
