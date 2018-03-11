import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { Slides } from 'ionic-angular';
import { Validators } from '@angular/forms';
import {  FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder,public navCtrl: NavController) {
     this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  checkRemove(formName){
    if (formName.controls.addresses.controls.length > 1){
      return true;
    }else{
      return false;
    }
  }
  ionViewWillEnter(){
    // global.setTimeout(function(){
    //   // this.slides.slideNext(500, true)
    //   console.log("hello")
    // },1000);
    
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
