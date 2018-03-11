import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AlertController } from 'ionic-angular';
import { Angular2TokenService, SignInData } from 'angular2-token';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
   private signInForm: FormGroup;
   signInData: SignInData = <SignInData>{};
  constructor(private _tokenService: Angular2TokenService,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this._tokenService.init({
      apiPath:'http://localhost:3000',
      signInPath: 'auth/sign_in',
      globalOptions: {
            headers: {
                'Content-Type':     'application/json',
                'Accept':           'application/json'
            }
        }
    });
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

    this._tokenService.signIn({
    email:                this.signInData.email,
    password:             this.signInData.password
    }).subscribe(
        res =>      this.navCtrl.push(HomePage),
        error =>    this.showAlert()
    );
    
 //  	console.log("dasdasdasdasdasdasd")
 //  	console.log(this.signInData.email);
	// //console.log(this.password);
	// this.navCtrl.push(HomePage);
	// this.showAlert();
//   this._tokenService.signIn({
//     email:    this.email,
//     password: this.password
//   }).subscribe(
//     res =>      console.log(res),
//     error =>    console.log(error)
// );
}

}
