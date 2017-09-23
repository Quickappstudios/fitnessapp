/*Check the network if we are offline*/

import { Injectable } from '@angular/core';
import { AlertController,App } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController,} from 'ionic-angular';
import { Network } from '@ionic-native/network';



@Injectable()
export class NetworkServiceProvider {

  constructor(
    public http: Http,
    public alert: AlertController,
   
    //private diagnostic: Diagnostic,
    public network: Network,
    private app: App) {
    console.log('Connected to network');
    // this.navCtrl = app.getActiveNav();
  }

  //if we have no connection return no connection type
  noConnection(){
    return (this.network.type === 'none');
  }



  //go to the home page if we have no connect if we do we show the alert
  private showSettings() {
    
        if (this.noConnection()) {
          this.showNetworkAlert();
        
        //push to the home page
        } else {
          // this.navCtrl.push("Homepage");
        }

      }
  
  //show network connection alert

  showNetworkAlert() {
    let networkAlert = this.alert.create({
      title: 'No Internet Connection',
      message: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Reload',
          handler: () => {
            networkAlert.dismiss().then(() => {
              this.showSettings();
            })
          }
        }
      ]
    });
    networkAlert.present();
  }

}
