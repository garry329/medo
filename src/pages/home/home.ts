import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(private _tokenService: Angular2TokenService,public navCtrl: NavController) {
  	this._tokenService.init(
  		{
  			registerAccountPath:'/auth'
  		});
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ionViewWillEnter(){
    // global.setTimeout(function(){
    //   // this.slides.slideNext(500, true)
    //   console.log("hello")
    // },1000);
    
  }

signUp(){
	this._tokenService.registerAccount({
    email:                'example@example.org',
    password:             'secretPassword',
    passwordConfirmation: 'secretPassword'
}).subscribe(
    res =>      console.log(res),
    error =>    console.log(error)
);
}

}
