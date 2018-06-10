import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GalleryPage } from '../pages/gallery/gallery';
import { InputSelectorPage } from '../pages/inputselector/inputselector';
import { DrawingPage } from '../pages/drawing/drawing';
import { SinglePage } from '../pages/single/single';
import { CustomizePage } from '../pages/customize/customize'
import { OverviewPage } from '../pages/overview/overview';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Base64 } from '@ionic-native/base64';

import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GalleryPage,
    InputSelectorPage,
    DrawingPage,
    SinglePage,
    CustomizePage,
    OverviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GalleryPage,
    InputSelectorPage,
    DrawingPage,
    CustomizePage,
    SinglePage,
    OverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Base64,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
