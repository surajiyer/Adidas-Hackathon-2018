import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [[Camera]]
})
export class HomePage {
  options:any;

  public base64Image: string;

  constructor(public navCtrl: NavController,private camera: Camera) { 
    //this.takePicture();
  }
  
    public takePicture(){
      this.options = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.VIDEO
      }
      this.camera.getPicture(this.options)
        .then((imageData)=>{
          this.base64Image = "data:image/jpeg;base64," + imageData;
            
        }).then((path) => {

        })
    }
}
