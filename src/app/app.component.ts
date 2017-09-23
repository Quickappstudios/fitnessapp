import { GymsitePage } from './../pages/gymsite/gymsite';
import { HealthtipsPage } from './../pages/healthtips/healthtips';


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { WalkthroughPage } from './../pages/walkthrough/walkthrough';

import { VideoPage } from './../pages/video/video';

import{InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser";

//loading controller
import{LoadingController} from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  url:string;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WalkthroughPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private inAppBrowser:InAppBrowser,public loadCtrl:LoadingController) {
    this.initializeApp();

    
    
    
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Video', component: VideoPage },
      { title: 'Health Tips', component: HealthtipsPage }
      
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
    this.nav.push(page.component);
  }


  //open webpage

  //open webpage function
  openwebpage(url:string){
    //in appbrowser options
    const options:InAppBrowserOptions ={
      zoom:'no'
    }

//on success load the string
    try{
      
//Loading the url of browser

const browser = this.inAppBrowser.create('http://www.kildareleisure.ie/','_self',options);
}

    //on error
catch(e){
  console.log(e);
  
}

  }
  

    
   
        
    


      //loadingcontroller

       /*Load Videos*/
  presentLoader() {
    let loading = this.loadCtrl.create({
      content: 'Loading Website Please Wait...'
    });
  
    loading.present();

    
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }


}
