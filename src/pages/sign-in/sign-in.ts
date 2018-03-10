import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AlertController } from 'ionic-angular';
import { Angular2TokenService, SignInData } from 'angular2-token';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
	email:string;
   password:string;
   signInData: SignInData = <SignInData>{};
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please Enter Email And Password',
      buttons: ['OK']
    });
    alert.present();
  }
  signIn(){
    
  	console.log("dasdasdasdasdasdasd")
  	console.log(this.signInData.email);
	//console.log(this.password);
	this.navCtrl.push(HomePage);
	this.showAlert();
//   this._tokenService.signIn({
//     email:    this.email,
//     password: this.password
//   }).subscribe(
//     res =>      console.log(res),
//     error =>    console.log(error)
// );
}

}
