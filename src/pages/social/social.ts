import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser";



@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public inAppBrowser:InAppBrowser) {
  }

  ///Open up Social Pages

  //open webpage

  //open webpage function
  openfacebook(url:string){
    //in appbrowser options
    const options:InAppBrowserOptions ={
      zoom:'no'
    }

//on success load the string
    try{
      
//Loading the url of browser of company facebook

const browser = this.inAppBrowser.create('http://www.facebook.com/','_self',options);
}

    //on error
catch(e){
  console.log(e);
  
}

  }


//Open Twitter

//open webpage

  //open webpage function
  opentwitter(url:string){
    //in appbrowser options
    const options:InAppBrowserOptions ={
      zoom:'no'
    }

//on success load the string
    try{
      
//Loading the url of browser of company facebook

const browser = this.inAppBrowser.create('http://www.twitter.com/','_self',options);
}

    //on error
catch(e){
  console.log(e);
  
}

  }

  //Open Google

  //open webpage

  //open webpage function
  opengoogle(url:string){
    //in appbrowser options
    const options:InAppBrowserOptions ={
      zoom:'no'
    }

//on success load the string
    try{
      
//Loading the url of browser of company facebook

const browser = this.inAppBrowser.create('http://www.google.com/','_self',options);
}

    //on error
catch(e){
  console.log(e);
  
}







}

}
