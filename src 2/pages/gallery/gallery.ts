import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';


@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [[ImagePicker]]
})
export class GalleryPage {
  options: any;

  public base64Img: string[] = [];

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker) {
    this.getPictures();
  }

  /*
  * Get the pictures using the ImagePicker Library
  * @input: none
  * @params: none
  * output: array (base64Img) with filepaths
  */
  public getPictures() {
    this.imagePicker.getPictures({}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.base64Img.push(results[i]);
      }
    }, (err) => {
      console.log('err' + err);
    });
  }



}

