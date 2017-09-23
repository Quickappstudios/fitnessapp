import { GymsitePage } from './../pages/gymsite/gymsite';
import { HealthtipsPage } from './../pages/healthtips/healthtips';
import { YoutubePipe } from './../pipes/youtube/youtube';
import { VideoPage } from './../pages/video/video';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import Angularfire

import{AngularFireModule} from 'angularfire2';


import { FIREBASE_CONFIG } from './../app.firebase.config';


//Pages
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';

import {InAppBrowser} from '@ionic-native/in-app-browser';
import { NetworkServiceProvider } from '../providers/network-service/network-service';



//Import Firebase

@NgModule({
  declarations: [
    MyApp,
    HomePage,
     WalkthroughPage,
    VideoPage,
    YoutubePipe,
    HealthtipsPage,
    GymsitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    VideoPage,
    HealthtipsPage,
    GymsitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkServiceProvider,
  
  ]
})
export class AppModule {}
