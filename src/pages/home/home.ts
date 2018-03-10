import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _tokenService: Angular2TokenService,public navCtrl: NavController) {
  	this._tokenService.init(
  		{
  			registerAccountPath:'/auth'
  		});
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
