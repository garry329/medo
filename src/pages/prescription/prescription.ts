import { Component } from '@angular/core';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators } from '@angular/forms';
import {  FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from './customer.interface';
/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  public myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _fb: FormBuilder) {
  	this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }

  checkRemove(formName){
    if (formName.controls.addresses.controls.length > 1){
      return true;
    }else{
      return false;
    }
  }

   initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }


}
