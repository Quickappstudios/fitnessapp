

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




import { HomePage } from '../pages/home/home';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { VideoPage } from './../pages/video/video';
import { GymsitePage } from './../pages/gymsite/gymsite';
import { HealthtipsPage } from './../pages/healthtips/healthtips';
import { ClassesPage } from './../pages/classes/classes';

//import Loginpage
import { LoginPage } from './../pages/login/login';

import{InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser";

//loading controller
import{LoadingController,ToastController} from 'ionic-angular';

//import AngularfireAuth

import { AngularFireAuth } from 'angularfire2/auth';

//ToastController



// Interface of app pages';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  provider = {
    loggedin: false,
    name: '',
    email: '',
    profilePicture: ''
  }

  url:string;
  @ViewChild(Nav) nav: Nav;


//Array Of Pages to Show

//app pages we see when logged in
appPages: PageInterface[] = [
  { title: 'Home', name: 'HomePage', component: HomePage, index: 0, icon: 'home' },
  { title: 'Health Tips', name: 'Health Tips', component: HealthtipsPage, index: 0, icon: 'medkit' },
  { title: 'Classes', name: 'Classes', component: ClassesPage, index: 0, icon: 'medkit' }

];

//logged in Pages we show
loggedInPages: PageInterface[] = [
  
  { title: 'Logout', name: 'HomePage', component: HomePage, icon: 'log-out', logsOut: true }
];

//logged out Pages we can show
loggedOutPages: PageInterface[] = [

  { title: 'Logout', name: 'HomePage', component: HomePage, icon: 'log-out', logsOut: true }
  
];






//Main RootPage
  rootPage: any = ClassesPage;

  

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private inAppBrowser:InAppBrowser,
    public loadCtrl:LoadingController,
    private fire: AngularFireAuth,
    public toastCtrl:ToastController,
    public menuCtrl:MenuController
 
    ) {
    this.initializeApp();


    



}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  //push to the component pages

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



//Toast Controller
presentToast() {
  let toast = this.toastCtrl.create({
    message: 'You have Logged Out Successfully',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}




  //Logout with firebase

  logout() {
    this.fire.auth.signOut();  
    this.provider.loggedin = false;
    this.nav.setRoot(LoginPage);

    this.presentToast();
  }


  enableAuthenticatedMenu() {
    // this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
  }

}
