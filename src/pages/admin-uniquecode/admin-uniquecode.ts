import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminUniquecodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-uniquecode',
  templateUrl: 'admin-uniquecode.html',
})
export class AdminUniquecodePage {
  uniqueCodes: any[];
  newUniquecode: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.uniqueCodes = [
      'AE123333',
      'AE123333',
      'AE123333',
      'AE123333',
    ]
  }

  registerUniqueCode () {
    
  }
  ionViewDidLoad() {
  }

}
