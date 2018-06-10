import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomizePage } from '../customize/customize';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}