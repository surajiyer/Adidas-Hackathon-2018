import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';


@Component({
  selector: 'page-inputselector',
  templateUrl: 'inputselector.html',
  providers: [[ImagePicker]]
})
export class InputSelectorPage {
  options: any;

  public base64Img: string[] = [];

  public inputItems = ['assets/imgs/shoe.png', 'assets/imgs/tshirt.jpeg'];

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker) {

  }

}

