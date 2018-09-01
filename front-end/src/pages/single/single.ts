import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomizePage } from '../customize/customize';

@Component({
  selector: 'page-home',
  templateUrl: 'single.html',
})
export class SinglePage {

  item: {id: number, title: string, price: number, discounted: number, image: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.item = navParams.data.item;
  }

  goCustomize(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CustomizePage, {
      item: this.item
    });
  }

}