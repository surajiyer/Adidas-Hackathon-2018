import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SinglePage } from '../single/single';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {


  items: Array<{ id: number, title: string, price: number, discounted: number, image: string }>;

  constructor(public navCtrl: NavController) {
    this.items = [
      { id: 0, title: "Ultraboost shoes", price: 200, discounted: 150, image: "assets/imgs/placeholder.png" },
      { id: 1, title: "Ultraboost shoes", price: 60, discounted: 50, image: "assets/imgs/placeholder-tshirt.png" },
      { id: 2, title: "Ultraboost shoes", price: 200, discounted: 150, image: "assets/imgs/placeholder.png" },
      { id: 3, title: "Amazonian greens", price: 60, discounted: 50, image: "assets/imgs/placeholder-tshirt.png" },
      { id: 4, title: "Ultraboost shoes", price: 200, discounted: 150, image: "assets/imgs/placeholder.png" }
    ];
  }

  goToItem(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SinglePage, {
      item: item
    });
  }

}

// alert($(window).height())

// jQuery(function($) {
//   $( window ).scroll(function() {
//     var newScroll = document.body.scrollTop;
//     $( ".ion-page.show-page" ).css( "background-position", "0 " + newScroll + "px" );
//     alert("0 " + newScroll + "px");

//   });
// })