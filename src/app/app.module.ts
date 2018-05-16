import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateProfilePage } from '../pages/create-profile/create-profile';
import { UniqueIdPage } from '../pages/unique-id/unique-id';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AdminUniquecodePage } from '../pages/admin-uniquecode/admin-uniquecode';
import  { ContactUsPage } from '../pages/contact-us/contact-us';
import { SupportPage } from '../pages/support/support';
import { ReferClientPage } from '../pages/refer-client/refer-client';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateProfilePage,
    UniqueIdPage,
    DashboardPage,
    AdminUniquecodePage,
    ContactUsPage,
    SupportPage,
    ReferClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateProfilePage,
    UniqueIdPage,
    DashboardPage,
    AdminUniquecodePage,
    ContactUsPage,
    SupportPage,
    ReferClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    SpinnerDialog,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
