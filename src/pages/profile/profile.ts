import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  editForm: boolean = false;
  email: string = 'test@demo.com';
  firstname: string = 'Chidebere';
  lastname: string = 'Nkwoge' 
  phone: string = '+2348066112787';
  UniqueCode: string = 'AE102X';
  username: string = 'celebobo';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
