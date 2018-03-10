import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
	email:string;
	password:string;
	passwordConfirmation:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  	

	signUp(){
		// this._tokenService.registerAccount({
		//     email:  this.email,
		//     password: this.password,
		//     passwordConfirmation: this.passwordConfirmation
		// }).subscribe(
		//     res =>      console.log(res),
		//     error =>    console.log(error)
		// );
		console.log(this.email)
		console.log(this.password)
		console.log(this.passwordConfirmation)
		this.showAlert('bewakoof','Password Sahi Daal Dia kar')
		this.navCtrl.push(HomePage);
		
	}

	showAlert(title,message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


}
