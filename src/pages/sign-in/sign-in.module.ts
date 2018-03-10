import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';
import { Angular2TokenService, SignInData } from 'angular2-token';

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
  ],
})
export class SignInPageModule {
   
constructor(private _tokenService: Angular2TokenService){
	
}
  

}
