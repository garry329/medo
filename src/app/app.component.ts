import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { PrescriptionPage } from '../pages/prescription/prescription';
import { ScannerPage } from '../pages/scanner/scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private _tokenService: Angular2TokenService,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this._tokenService.init();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Sign In', component: SignInPage },
      { title: 'Sign Up', component: SignUpPage },
      { title: 'Scan' , component: ScannerPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
