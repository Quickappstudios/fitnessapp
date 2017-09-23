




import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import Angularfire
import{AngularFireModule} from 'angularfire2';
import {FIREBASE_CONFIG } from './../app.firebase.config';

//import Login auth
import { AngularFireAuth } from 'angularfire2/auth';


//Pages
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { GymsitePage } from './../pages/gymsite/gymsite';
import { HealthtipsPage } from './../pages/healthtips/healthtips';
import { YoutubePipe } from './../pipes/youtube/youtube';
import { VideoPage } from './../pages/video/video';
import { HomePage } from '../pages/home/home';

//Pages Auth

import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';


//import Network service
import { NetworkServiceProvider } from './../providers/network-service/network-service';
import { HttpModule, JsonpModule } from '@angular/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
     WalkthroughPage,
    VideoPage,
    YoutubePipe,
    HealthtipsPage,
    GymsitePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    HttpModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    VideoPage,
    HealthtipsPage,
    GymsitePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkServiceProvider,
    AngularFireAuth
  
  ]
})
export class AppModule {}
