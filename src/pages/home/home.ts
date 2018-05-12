import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UniqueIdPage } from '../unique-id/unique-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uniqueIdPage = UniqueIdPage;

  constructor(public navCtrl: NavController) {

  }

}
