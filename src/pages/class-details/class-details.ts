import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-details',
  templateUrl: 'class-details.html',
})
export class ClassDetailsPage {
///item is our holder of array being passed over
  item;


  //get the item from the array we passed over
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.item = navParams.get('item');

  }



}
