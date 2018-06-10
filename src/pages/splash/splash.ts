import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomizePage } from '../customize/customize';
import { OverviewPage } from '../overview/overview';

@Component({
	selector: 'page-splash',
	templateUrl: 'splash.html',
})
export class SplashPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.doRedirect();
	}

	doRedirect() {
		setTimeout(function() {
			this.navCtrl.push(OverviewPage, {});
		}, 3000);
	}
}