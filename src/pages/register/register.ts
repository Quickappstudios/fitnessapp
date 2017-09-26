import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private fire: AngularFireAuth) {
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  register() {
  	this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
  	.then( res => {
  		console.log('got data',res);
  		this.showAlert('Register success!');
  		this.navCtrl.push(LoginPage);
  	})
  	.catch( error => {
  		console.log('got error',error);
  		this.showAlert(error.message);
  	});

  }

}
