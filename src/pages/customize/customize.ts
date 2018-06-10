import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'customize.html',
})
export class CustomizePage {

  item: {id: number, title: string, price: number, discounted: number, image: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.item = navParams.data.item;
  }

}