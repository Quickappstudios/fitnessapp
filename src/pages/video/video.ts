import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  //array of videos
video:any[] = [
  
    {
      title:'Using the DomSanitizer to Embed YouTube Videos in Ionic 2 / Angular Applications',
      videos:'https://www.youtube.com/embed/9yZEvkofi24',
    },
  
  
    {
      title:'Ionic 3 Video Player',
      videos:'https://www.youtube.com/embed/2JeKfQ2r2r8'
    },
  
    {
      title:'Ionic 3 Video Player',
      videos:'https://www.youtube.com/embed/2JeKfQ2r2r8'
    },

    {
      title:'Ionic 3 Video Player',
      videos:'https://www.youtube.com/embed/2JeKfQ2r2r8'
    },
  
  
  
  
  
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadCtrl:LoadingController) {
  this.presentLoader();
  
  }


  /*Load Videos*/
  presentLoader() {
    let loading = this.loadCtrl.create({
      content: 'Loading Fitness Videos...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }


}
