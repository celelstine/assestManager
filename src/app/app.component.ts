import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DashboardPage } from '../pages/dashboard/dashboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  dashboardPage: any = DashboardPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private network: Network,
    public toastCtrl: ToastController
  ) {
    this.initializeApp();

    let toast = this.toastCtrl.create({
      message: 'Network was disconnected, please turn on your internet connection',
      duration: 60000,
      position: 'center',
      showCloseButton: true
    });
    this.network.onDisconnect().subscribe(() => {
      toast.present();
    });
    this.network.onConnect().subscribe(() => {
      toast.dismiss();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
  // watch network for a disconnect
 
}
