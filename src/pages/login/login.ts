

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,MenuController } from 'ionic-angular';



//import Firebaseauth
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

//Import Pages
import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  activeMenu: string;

  @ViewChild('email') email;
  @ViewChild('password') password;
  
  provider = {
		loggedin: false,
		name: '',
		email: '',
		profilePicture: ''
	}


  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth,public menu:MenuController) {
  
    this.menu1Active();
  }


  //dont show the side menu on the loginpage//
  menu1Active() {
    this.activeMenu = 'app-login';
    this.menu.enable(true, 'app-login');
    // this.menu.enable(false, 'menu2');
  }

 //show alert

 showAlert(message: string) {
  let alert = this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

//sign in with Firebase
signIn() {
  this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
  .then( res => {

    // on success
    this.provider.loggedin = true;
    this.provider.name = res.displayName;
    this.provider.email = res.email;
    this.provider.profilePicture = res.photoURL;
    console.log('from Email', res);
    this.showAlert('Success! you\'re logged in by Email');
    this.navCtrl.setRoot(HomePage, this.provider);
  })

  //if we have an errot
  .catch( error => {
    console.log('got error',error);
    this.showAlert(error.message);
  });
}

//go to the Register page
register() {
  this.navCtrl.push(RegisterPage);
}

}
