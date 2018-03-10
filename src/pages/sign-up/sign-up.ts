import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Angular2TokenService, RegisterData } from 'angular2-token';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
	private registerForm : FormGroup;
	registerData: RegisterData = <RegisterData>{};
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private formBuilder: FormBuilder) {
  	this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['',Validators.required]
    });
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
		console.log(this.registerData.email)
		console.log(this.registerData.password)
		console.log(this.registerData.passwordConfirmation)
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
