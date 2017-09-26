import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@IonicPage()
@Component({
  selector: 'page-healthtips',
  templateUrl: 'healthtips.html',
})
export class HealthtipsPage {


  //  propertys to get posts
   quotes :any;

   //api url we get our posts from
  private  apiUrl :string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10";

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing,private http:Http ) {

    this.getQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthtipsPage');
  }


  //get the quotes from json wordpress file blog
  async getQuotes(){
    this.quotes = await this.http.get(this.apiUrl).map(res => res.json()).toPromise();;

}

// do refresh method
  doRefresh(refresher) {
    this.getQuotes();

    setTimeout(() => {
      console.log('Complete');
      refresher.complete();
    }, 2000);
  }


  //sharing the data from our json

  compilemsg(index):string{
    var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    return msg.concat(" \n sent from my awesome app");
  }
  regularShare(index){
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }
  twitterShare(index){
    var msg  = this.compilemsg(index);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }
  whatsappShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }
   facebookShare(index){
     var msg  = this.compilemsg(index);
      this.socialSharing.shareViaFacebook(msg, null, null);
    }

}
