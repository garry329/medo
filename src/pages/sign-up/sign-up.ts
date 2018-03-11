import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController , ToastController } from 'ionic-angular';
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
	output: any;
	passwordConfirmation:string;
  private emailBool:boolean;passwordBool:boolean;confirmPasswordBool:boolean;
  emailError:string;passwordError:string;confirmPasswordError:string;
	private registerForm : FormGroup;
	registerData: RegisterData = <RegisterData>{};
  constructor(private _tokenService: Angular2TokenService,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private formBuilder: FormBuilder,private toastCtrl: ToastController) {
  	this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['',Validators.required]
    });

    this._tokenService.init({
      apiPath:'http://localhost:3000',
    	registerAccountPath: 'auth',
      globalOptions: {
            headers: {
                'Content-Type':     'application/json',
                'Accept':           'application/json'
            }
        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  presentToast(mess) {
    let toast = this.toastCtrl.create({
      message: mess,
      duration: 3000,
      position: 'Bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }	
  
  checkError(type){
    if(type == 'email'){
      if(this.emailBool){
        return true
      }
    }else if(type == 'password'){
      if(this.passwordBool){
        return true;
      }
    }else if(type == 'password_confirmation'){
      if(this.passwordConfirmation){
        return true;
      }
    }
    return false;
  }
  error(type,errorMessage){
    if(type == 'email'){
      this.emailBool = true;
      this.emailError = errorMessage;
    }else if(type == 'password'){
      this.passwordBool = true;
      this.passwordError = errorMessage;
    }else if(type == 'passwordConfirmation'){
      this.confirmPasswordBool = true;
      this.passwordConfirmation = errorMessage;
    }else{
      return false;
    }
    return true;
  }
	signUp(){

		this._tokenService.registerAccount({
    email:                this.registerData.email,
    password:             this.registerData.password,

    passwordConfirmation: this.registerData.passwordConfirmation}).subscribe(
		    res => {
          this.presentToast('Signed Up Successfully')
          this.navCtrl.push(HomePage);

        },    
		    error => {
          var map = JSON.parse(error['_body']);
          console.log(map['errors'])
          var errorMap = map['errors'];
          console.log(errorMap)
          for (let i in errorMap){
            console.log(i)
            this.error(i,errorMap[i][0])
          }
          this.presentToast('Please Fill the Feilds Correctly')
        }
		);
		// console.log(this.registerData.email)
		// console.log(this.registerData.password)
		// console.log(this.registerData.passwordConfirmation)
		// this.showAlert('bewakoof','Password Sahi Daal Dia kar')
		// this.navCtrl.push(HomePage);
		
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
