webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customize_customize__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SinglePage = /** @class */ (function () {
    function SinglePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    SinglePage.prototype.goCustomize = function (event) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customize_customize__["a" /* CustomizePage */], {
            item: this.item
        });
    };
    SinglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/single/single.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="/assets/imgs/logo-adidas.png" height="20px" alt="" /></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item">\n    <div class="image-container">\n      <a href="#" class="customize" (click)="goCustomize($event)"><ion-icon name="color-wand"></ion-icon> customize</a>\n      <img src="{{ item.image }}" alt="" />\n    </div>\n    <div class="info">\n      <span class="name">{{ item.title }}</span>\n      <span class="price">\n        {{ item.discounted | currency }}<br />\n        <span class="discount">{{ item.price | currency }}</span>\n      </span>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/single/single.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SinglePage);
    return SinglePage;
}());

//# sourceMappingURL=single.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        //this.takePicture();
    }
    HomePage.prototype.takePicture = function () {
        var _this = this;
        this.options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.VIDEO
        };
        this.camera.getPicture(this.options)
            .then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }).then(function (path) {
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Adidas Hackaton App</h3>\n\n<ion-content padding>\n<img src="assets/imgs/camera_icon.svg" class="camera_icon" (click)="takePicture()">\n<!-- <button ion-button color="dark" (click)="takePicture()">Take Photo</button> -->\n<img [src]="base64Image" *ngIf="base64Image" />\n</ion-content>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/home/home.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, imagePicker) {
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.base64Img = [];
        this.getPictures();
    }
    /*
    * Get the pictures using the ImagePicker Library
    * @input: none
    * @params: none
    * output: array (base64Img) with filepaths
    */
    GalleryPage.prototype.getPictures = function () {
        var _this = this;
        this.imagePicker.getPictures({}).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.base64Img.push(results[i]);
            }
        }, function (err) {
            console.log('err' + err);
        });
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/gallery/gallery.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gallery</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <button ion-button (click)="getPictures()">Get Pictures from gallery</button>\n <div *ngFor="let imgInstance of base64Img">\n 	<img src="{{imgInstance}}"/>\n 	{{imgInstance}}\n </div>\n</ion-content>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/gallery/gallery.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputSelectorPage = /** @class */ (function () {
    function InputSelectorPage(navCtrl, imagePicker) {
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.base64Img = [];
        this.inputItems = ['assets/imgs/shoe.png', 'assets/imgs/tshirt.jpeg'];
    }
    InputSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inputselector',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/inputselector/inputselector.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Gallery</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <div *ngFor="let item of inputItems">\n 	<img src="{{item}}"/>{{item}}\n </div>\n</ion-content>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/inputselector/inputselector.html"*/,
            providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], InputSelectorPage);
    return InputSelectorPage;
}());

//# sourceMappingURL=inputselector.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var STORAGE_KEY = 'IMAGE_LIST';
var DrawingPage = /** @class */ (function () {
    function DrawingPage(navCtrl, file, storage, renderer, plt, base64) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.storage = storage;
        this.renderer = renderer;
        this.plt = plt;
        this.base64 = base64;
        this.chosenImage = 'assets/imgs/shoe.png';
        this.storedImages = [];
        this.allPositionsX = [];
        this.allPositionsY = [];
        // Color Stuff
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2956'];
        // Load all stored images when the app is ready
        // this.storage.ready().then(() => {
        // 	this.storage.get(STORAGE_KEY).then(data => {
        // 		if (data != undefined) {
        // 			this.storedImages = data;
        // 		}
        // 	});
        // });
    }
    DrawingPage.prototype.plotImage = function (dimension) {
        var ctx = this.canvasElement.getContext('2d');
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
    };
    DrawingPage.prototype.ionViewDidEnter = function () {
        // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
        // Get the height of the fixed item
        var itemHeight = this.fixedContainer.nativeElement.offsetHeight;
        var scroll = this.content.getScrollElement();
        // Add preexisting scroll margin to fixed container size
        itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        scroll.style.marginTop = itemHeight + 'px';
    };
    DrawingPage.prototype.ionViewDidLoad = function () {
        // Set the Canvas Element and its size
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.plt.width() + '';
        this.canvasElement.height = 400;
        // this.loadFileAsBase64();
        this.plotImage(400);
    };
    DrawingPage.prototype.selectColor = function (color) {
        this.selectedColor = color;
    };
    DrawingPage.prototype.startDrawing = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        this.saveX = ev.touches[0].pageX - canvasPosition.x;
        this.saveY = ev.touches[0].pageY - canvasPosition.y;
    };
    DrawingPage.prototype.moved = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX - canvasPosition.x;
        var currentY = ev.touches[0].pageY - canvasPosition.y;
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
    };
    DrawingPage.prototype.saveCanvasImage = function () {
        var _this = this;
        var dataUrl = this.canvasElement.toDataURL();
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
        var name = new Date().getTime() + '.png';
        var path = this.file.dataDirectory;
        var options = { replace: true };
        var data = dataUrl.split(',')[1];
        console.log(data);
        console.log(this.allPositionsX);
        this.plotImage(1200);
        var blob = this.b64toBlob(data, 'image/png');
        this.file.writeFile(path, name, blob, options).then(function (res) {
            _this.storeImage(name);
        }, function (err) {
            console.log('error: ', err);
        });
    };
    // https://forum.ionicframework.com/t/save-base64-encoded-image-to-specific-filepath/96180/3
    DrawingPage.prototype.b64toBlob = function (b64Data, contentType) {
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
    };
    DrawingPage.prototype.storeImage = function (imageName) {
        var _this = this;
        var saveObj = { img: imageName };
        this.storedImages.push(saveObj);
        this.storage.set(STORAGE_KEY, this.storedImages).then(function () {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 500);
        });
    };
    DrawingPage.prototype.removeImageAtIndex = function (index) {
        var removed = this.storedImages.splice(index, 1);
        this.file.removeFile(this.file.dataDirectory, removed[0].img).then(function (res) {
        }, function (err) {
            console.log('remove err; ', err);
        });
        this.storage.set(STORAGE_KEY, this.storedImages);
    };
    DrawingPage.prototype.getImagePath = function (imageName) {
        var path = this.file.dataDirectory + imageName;
        // https://ionicframework.com/docs/wkwebview/#my-local-resources-do-not-load
        path = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* normalizeURL */])(path);
        return path;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('imageCanvas'),
        __metadata("design:type", Object)
    ], DrawingPage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], DrawingPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fixedContainer'),
        __metadata("design:type", Object)
    ], DrawingPage.prototype, "fixedContainer", void 0);
    DrawingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drawing',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/drawing/drawing.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding no-bounce>\n  <img [src]="chosenImage" *ngIf="chosenImage" id="preloader" />\n  <div #fixedContainer ion-fixed>\n    <ion-row>\n      <ion-col *ngFor="let color of colors" [style.background]="color" class="color-block" tappable (click)="selectColor(color)"></ion-col>\n    </ion-row>\n    <ion-row radio-group [(ngModel)]="selectedColor">\n      <ion-col *ngFor="let color of colors" text-center>\n        <ion-radio [value]="color"></ion-radio>\n      </ion-col>\n    </ion-row>\n    <canvas #imageCanvas (touchstart)="startDrawing($event)" (touchmove)="moved($event)"></canvas>\n    <button ion-button full icon-only color="danger" (click)="removeImageAtIndex(i)">\n      Trash\n    </button>\n    <button ion-button full (click)="saveCanvasImage()">Save Image</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/drawing/drawing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */]])
    ], DrawingPage);
    return DrawingPage;
}());

//# sourceMappingURL=drawing.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomizePage = /** @class */ (function () {
    function CustomizePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    CustomizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/customize/customize.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="/assets/imgs/logo-adidas.png" height="20px" alt="" /></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item">\n    <div class="image-container">\n      <img src="{{ item.image }}" alt="" />\n    </div>\n    <div class="image-container">\n      <img src="{{ item.image }}" alt="" />\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/customize/customize.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CustomizePage);
    return CustomizePage;
}());

//# sourceMappingURL=customize.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_single__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            { id: 0, title: "Ultraboost shoes", price: 200, discounted: 150, image: "/assets/imgs/placeholder.png" },
            { id: 1, title: "Ultraboost shoes", price: 60, discounted: 50, image: "/assets/imgs/placeholder-tshirt.png" },
            { id: 2, title: "Ultraboost shoes", price: 200, discounted: 150, image: "/assets/imgs/placeholder.png" },
            { id: 3, title: "Amazonian greens", price: 60, discounted: 50, image: "/assets/imgs/placeholder-tshirt.png" },
            { id: 4, title: "Ultraboost shoes", price: 200, discounted: 150, image: "/assets/imgs/placeholder.png" }
        ];
    }
    OverviewPage.prototype.goToItem = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__single_single__["a" /* SinglePage */], {
            item: item
        });
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="/assets/imgs/logo-adidas.png" height="20px" alt="" /></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item" *ngFor="let item of items" (click)="goToItem($event, item)">\n    <div class="image-container">\n      <img src="{{ item.image }}" alt="" />\n    </div>\n    <div class="info">\n      <span class="name">{{ item.title }}</span>\n      <span class="price">\n        {{ item.discounted | currency }}<br />\n        <span class="discount">{{ item.price | currency }}</span>\n      </span>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], OverviewPage);
    return OverviewPage;
}());

// alert($(window).height())
// jQuery(function($) {
//   $( window ).scroll(function() {
//     var newScroll = document.body.scrollTop;
//     $( ".ion-page.show-page" ).css( "background-position", "0 " + newScroll + "px" );
//     alert("0 " + newScroll + "px");
//   });
// }) 
//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gallery_gallery__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inputselector_inputselector__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_drawing_drawing__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_single_single__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_customize_customize__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inputselector_inputselector__["a" /* InputSelectorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drawing_drawing__["a" /* DrawingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_single_single__["a" /* SinglePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customize_customize__["a" /* CustomizePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gallery_gallery__["a" /* GalleryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inputselector_inputselector__["a" /* InputSelectorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drawing_drawing__["a" /* DrawingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customize_customize__["a" /* CustomizePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_single_single__["a" /* SinglePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_overview_overview__["a" /* OverviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__["a" /* Base64 */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gallery_gallery__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inputselector_inputselector__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_drawing_drawing__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_single_single__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__["a" /* OverviewPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Overview', component: __WEBPACK_IMPORTED_MODULE_10__pages_overview_overview__["a" /* OverviewPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Gallery', component: __WEBPACK_IMPORTED_MODULE_6__pages_gallery_gallery__["a" /* GalleryPage */] },
            { title: 'InputSelector', component: __WEBPACK_IMPORTED_MODULE_7__pages_inputselector_inputselector__["a" /* InputSelectorPage */] },
            { title: 'Drawing', component: __WEBPACK_IMPORTED_MODULE_8__pages_drawing_drawing__["a" /* DrawingPage */] },
            { title: 'Single', component: __WEBPACK_IMPORTED_MODULE_9__pages_single_single__["a" /* SinglePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/jeroenbrouns/Desktop/hackaton/ionic_workspace/AdidasHackaton/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map