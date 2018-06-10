import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform, normalizeURL, Content, NavParams } from 'ionic-angular';
import { File, IWriteOptions } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

const STORAGE_KEY = 'IMAGE_LIST';

@Component({
	selector: 'page-customize',
	templateUrl: 'customize.html',
	providers: [[Camera, ImagePicker]]
})

export class CustomizePage {

	item: { id: number, title: string, price: number, discounted: number, image: string };

	public imagesFromGallery: string[] = [];
	public takenPicture: string;

	// Canvas stuff
	@ViewChild('imageCanvas') canvas: any;
	takenPictureOptions: any;
	canvasElement: any;
	saveX: number;
	saveY: number;
	chosenImage: string = 'assets/imgs/shoe.png';
	storedImages = [];
	allPositionsX: number[] = [];
	allPositionsY: number[] = [];
	img;

	// Make Canvas sticky at the top stuff
	@ViewChild(Content) content: Content;
	@ViewChild('fixedContainer') fixedContainer: any;

	// Color Stuff
	selectedColor = '#9e2956';

	colors = ['#9e2956'];

	constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private file: File, private storage: Storage, public renderer: Renderer, private plt: Platform, private base64: Base64, private imagePicker: ImagePicker) {
		this.item = navParams.data.item;
	}

	public plotImage(width, height) {
		let ctx = this.canvasElement.getContext('2d');
		var myImage = new Image();

		this.img = document.getElementById("preloader");

		ctx.drawImage(this.img, 0, 0, width, height);
		document.getElementById("preloader").outerHTML = "";
	}

	ionViewDidEnter() {
		// https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
		// Get the height of the fixed item
		let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
		let scroll = this.content.getScrollElement();

		// Add preexisting scroll margin to fixed container size
		itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
		scroll.style.marginTop = itemHeight + 'px';
	}

	ionViewDidLoad() {
		// Set the Canvas Element and its size
		this.canvasElement = this.canvas.nativeElement;
		this.plotImage(1200, 900);
	}

	selectColor(color) {
		this.selectedColor = color;
	}

	startDrawing(ev) {
		var canvasPosition = this.canvasElement.getBoundingClientRect();

		this.saveX = (ev.touches[0].pageX - canvasPosition.x) * 3;;
		this.saveY = (ev.touches[0].pageY - canvasPosition.y) * 3;;
	}

	moved(ev) {
		var canvasPosition = this.canvasElement.getBoundingClientRect();

		let ctx = this.canvasElement.getContext('2d');
		let currentX = (ev.touches[0].pageX - canvasPosition.x) * 3;
		let currentY = (ev.touches[0].pageY - canvasPosition.y) * 3;

		ctx.lineJoin = 'round';
		ctx.strokeStyle = this.selectedColor;
		ctx.lineWidth = 15;

		ctx.beginPath();
		ctx.moveTo(this.saveX, this.saveY);
		ctx.lineTo(currentX, currentY);
		ctx.closePath();

		ctx.stroke();

		this.saveX = currentX;
		this.saveY = currentY;

		this.allPositionsX.push(currentX);
		this.allPositionsY.push(currentY);

	}

	makeRequest(data) {
		console.log('Making request');
		var url = "http://52.211.71.172:5000/transform";
		$.ajax({
			url: url,
			data: data,
			dataType: "json",
			type: "POST",
			success: function(data) {
				alert(data);
			}
		});
	}

	saveCanvasImage() {

		//Base64 of piece of clothing
		var dataUrl = this.canvasElement.toDataURL();
		var data = dataUrl.split(',')[1];
		console.log('input_object:');
		console.log(data);

		var parent = this;

		if (this.takenPicture != '') {
			this.toDataURL(this.takenPicture, function(dataUrl) {
				console.log('RESULT:', dataUrl);

				var data_user = dataUrl.split(',')[1];
				data = { input_user: data_user, input_object: data };
				console.log(data);
				parent.makeRequest(data);
			})
		}
		else {
			//For now we only support 1 image form gallelry
			this.toDataURL(this.imagesFromGallery[0], function(dataUrl) {
				console.log('RESULT:', dataUrl);

				var data_user = dataUrl.split(',')[1];
				data = { input_user: data_user, input_object: data };
				console.log(data);
				parent.makeRequest(data);
			})
		}


		// var inputImage = this.getInputImage();
		// var data_user = inputImage.split(',')[1];

		// console.log('input_image:');
		// console.log(data_user);


		// data = { input_user: data_user, input_object: data };
		// console.log('final data:');
		// console.log(data);



	}

	// prepareUserInput() {

	// 	data_user = 
	// 	data = 


	// 	data = { input_user: data_user, input_object: data };
	// 	this.makeRequest(data);
	// }


	// https://forum.ionicframework.com/t/save-base64-encoded-image-to-specific-filepath/96180/3
	b64toBlob(b64Data, contentType) {
		contentType = contentType || '';
		var sliceSize = 512;
		var byteCharacters = atob(b64Data);
		var byteArrays = [];

		for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			var slice = byteCharacters.slice(offset, offset + sliceSize);

			var byteNumbers = new Array(slice.length);
			for (var i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			var byteArray = new Uint8Array(byteNumbers);

			byteArrays.push(byteArray);
		}

		var blob = new Blob(byteArrays, { type: contentType });
		return blob;
	}

	storeImage(imageName) {
		let saveObj = { img: imageName };
		this.storedImages.push(saveObj);
		this.storage.set(STORAGE_KEY, this.storedImages).then(() => {
			setTimeout(() => {
				this.content.scrollToBottom();
			}, 500);
		});
	}

	removeImageAtIndex(index) {
		let removed = this.storedImages.splice(index, 1);
		this.file.removeFile(this.file.dataDirectory, removed[0].img).then(res => {
		}, err => {
			console.log('remove err; ', err);
		});
		this.storage.set(STORAGE_KEY, this.storedImages);
	}

	getImagePath(imageName) {
		let path = this.file.dataDirectory + imageName;
		// https://ionicframework.com/docs/wkwebview/#my-local-resources-do-not-load
		path = normalizeURL(path);
		return path;
	}

	public takePicture() {
		//reset picture
		this.resetImages();

		this.takenPictureOptions = {
			quality: 40,
			sourceType: this.camera.PictureSourceType.CAMERA,
			saveToPhotoAlbum: true,
			correctOrientation: true,
			destinationType: this.camera.DestinationType.DATA_URL,
			mediaType: this.camera.MediaType.VIDEO
		}
		this.camera.getPicture(this.takenPictureOptions)
			.then((imageData) => {
				this.takenPicture = "data:image/jpeg;base64," + imageData;

			}).then((path) => {

			})
	}

	toDataURL(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var reader = new FileReader();
			reader.onloadend = function() {
				callback(reader.result);
			}
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}

	//Truncate images so we can laod new ones
	resetImages() {
		this.takenPicture = '';
		this.imagesFromGallery = [];
	}

	//Choses between image from camera or image from gallery (XOR)
	getInputImage() {
		var result = "";

		if (this.takenPicture != '') {
			this.toDataURL(this.takenPicture, function(dataUrl) {
				console.log('RESULT:', dataUrl);
				result = dataUrl;
			})
		}
		else {
			//For now we only support 1 image form gallelry
			this.toDataURL(this.imagesFromGallery[0], function(dataUrl) {
				console.log('RESULT:', dataUrl);
				result = dataUrl;
			})
		}
		return result;
	}

	public getImagesFromGallery() {
		//reset pictures
		this.resetImages();
		this.imagePicker.getPictures({ quality: 40 }).then((results) => {
			for (var i = 0; i < results.length; i++) {
				this.imagesFromGallery.push(results[i]);
			}
		}, (err) => {
			console.log('err' + err);
		});
	}

}