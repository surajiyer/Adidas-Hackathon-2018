import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform, normalizeURL, Content } from 'ionic-angular';
import { File, IWriteOptions } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';

const STORAGE_KEY = 'IMAGE_LIST';

@Component({
	selector: 'page-drawing',
	templateUrl: 'drawing.html'
})


export class DrawingPage {
	// Canvas stuff
	@ViewChild('imageCanvas') canvas: any;
	canvasElement: any;

	saveX: number;
	saveY: number;
	chosenImage: string = 'assets/imgs/shoe.png';

	storedImages = [];

	allPositionsX: number[] = [];
	allPositionsY: number[] = [];


	// Make Canvas sticky at the top stuff
	@ViewChild(Content) content: Content;
	@ViewChild('fixedContainer') fixedContainer: any;

	// Color Stuff
	selectedColor = '#9e2956';

	colors = ['#9e2956'];

	constructor(public navCtrl: NavController, private file: File, private storage: Storage, public renderer: Renderer, private plt: Platform, private base64: Base64) {
		// Load all stored images when the app is ready
		// this.storage.ready().then(() => {
		// 	this.storage.get(STORAGE_KEY).then(data => {
		// 		if (data != undefined) {
		// 			this.storedImages = data;
		// 		}
		// 	});
		// });
	}

	public plotImage(dimension) {
		let ctx = this.canvasElement.getContext('2d');
		var myImage = new Image();
		// myImage.src = imgData;
		// ctx.drawImage(myImage, 0, 0);

		var img = document.getElementById("preloader");
		console.log('im here');
		ctx.drawImage(img, 0, 0, dimension, dimension);
		document.getElementById("preloader").outerHTML = "";

		// ctx.drawImage(img, 0, 0, img.clientWidth, img.clientHeight,     // source rectangle
		// 	0, 0, this.canvasElement.width, this.canvasElement.height); // destination rectangle
		// alert(c.toDataURL());
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
		this.canvasElement.width = this.plt.width() + '';
		this.canvasElement.height = 400;
		// this.loadFileAsBase64();
		this.plotImage(400);
	}

	selectColor(color) {
		this.selectedColor = color;
	}

	startDrawing(ev) {
		var canvasPosition = this.canvasElement.getBoundingClientRect();

		this.saveX = ev.touches[0].pageX - canvasPosition.x;
		this.saveY = ev.touches[0].pageY - canvasPosition.y;
	}

	moved(ev) {
		var canvasPosition = this.canvasElement.getBoundingClientRect();

		let ctx = this.canvasElement.getContext('2d');
		let currentX = ev.touches[0].pageX - canvasPosition.x;
		let currentY = ev.touches[0].pageY - canvasPosition.y;

		ctx.lineJoin = 'round';
		ctx.strokeStyle = this.selectedColor;
		ctx.lineWidth = 5;

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

	saveCanvasImage() {
		var dataUrl = this.canvasElement.toDataURL();

		let ctx = this.canvasElement.getContext('2d');
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas

		let name = new Date().getTime() + '.png';
		let path = this.file.dataDirectory;
		let options: IWriteOptions = { replace: true };

		var data = dataUrl.split(',')[1];

		console.log(data);
		console.log(this.allPositionsX);

		this.plotImage(1200);

		let blob = this.b64toBlob(data, 'image/png');

		this.file.writeFile(path, name, blob, options).then(res => {
			this.storeImage(name);
		}, err => {
			console.log('error: ', err);
		});
	}

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


}