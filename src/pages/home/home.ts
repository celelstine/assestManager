import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UniqueIdPage } from '../unique-id/unique-id';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uniqueIdPage = UniqueIdPage;
  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController) {
  


  }
 

  open(){
    this.navCtrl.push(DashboardPage);
  }

}
