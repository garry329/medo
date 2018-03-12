import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  friendAddress:any;
  friendAddressInput:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private qrScanner: QRScanner,private toastCtrl: ToastController) {
  this.qrScanner.useBackCamera();
  }



  ionViewDidLoad() {
  	this.qrScanner.prepare()
	  .then((status: QRScannerStatus) => {
	     if (status.authorized) {
	       // camera permission was granted


	       // start scanning
	       // let scanSub = this.qrScanner.scan().subscribe((text: string) => {
	       //   console.log('Scanned something', text);
	       //   this.presentToast(text);
	       //   this.qrScanner.hide(); // hide camera preview
	       //   scanSub.unsubscribe(); // stop scanning
	       // });
	       this.presentToast('allowed text scanning');

	       // show camera preview
	       // this.qrScanner.show();
	       // this.qrScanner.scan();

	       // wait for user to scan something, then the observable callback will be called

	     } else if (status.denied) {
	       // camera permission was permanently denied
	       // you must use QRScanner.openSettings() method to guide the user to the settings page
	       // then they can grant the permission from there
	       this.qrScanner.openSettings();
	     } else {
	       // permission was denied, but not permanently. You can ask for permission again at a later time.
	     }
	  })
	  .catch((e: any) => console.log('Error is', e));
  
    console.log('ionViewDidLoad ScannerPage');
  }
  scanQr(){
  	this.qrScanner.prepare()
	  .then((status: QRScannerStatus) => {
	     if (status.authorized) {
	       // camera permission was granted


	       // start scanning
	       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
	         console.log('Scanned something', text);
	         this.presentToast(text);
	         this.qrScanner.hide(); // hide camera preview
	         scanSub.unsubscribe(); // stop scanning
	       });

	       // show camera preview
	       this.qrScanner.show();
	       // this.qrScanner.scan();

	       // wait for user to scan something, then the observable callback will be called

	     } else if (status.denied) {
	       // camera permission was permanently denied
	       // you must use QRScanner.openSettings() method to guide the user to the settings page
	       // then they can grant the permission from there
	       this.qrScanner.openSettings();
	     } else {
	       // permission was denied, but not permanently. You can ask for permission again at a later time.
	     }
	  })
	  .catch((e: any) => console.log('Error is', e));
  }

  qrButtonClicked(event) {
    var context = this;
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {

        if (status.authorized) {
          // camera permission was granted
          console.log("scanning");
          this.presentToast("Scanning")
          var ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((scannedAddress: string) => {
            console.log('Scanned address', scannedAddress);
            this.presentToast('Scanned Address:'+scannedAddress);
            this.friendAddress = scannedAddress;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            ionApp.style.display = "block";
            this.friendAddressInput.setFocus();
          });

          // show camera preview
          ionApp.style.display = "none";
          context.qrScanner.show();
          // setTimeout(() => {
          //   ionApp.style.display = "block";
          //   scanSub.unsubscribe(); // stop scanning
          //   context.friendAddressInput.setFocus();
          //   context.qrScanner.hide();
          // }, 5000);
          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          console.log("Denied permission to access camera");
          this.presentToast("Denied permission to access camera");
        } else {
          console.log("Something else is happening with the camera");
        }
      })
      .catch((e: any) => {
      	console.log('Error is', e);
      	this.presentToast('Error is'+String(e));
  		});
  }



  presentToast(mess) {
    let toast = this.toastCtrl.create({
      message: mess,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }  

}
