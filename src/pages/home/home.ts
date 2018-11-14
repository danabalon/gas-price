import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {GasPriceApi} from "../../app/shared/sdk/services/custom";
declare const google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number = -38.954933;
  lng: number = -68.050773;
  icon = { url: 'assets/images/favicon.ico', scaledSize: { height: 40, width: 20 }};
  gasType = 1;
  company = 1;

  styles: any[] = [
    // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  ];

  @ViewChild('sliders') sliders: Slides;

  constructor(private gasPriceApi: GasPriceApi,
              public navCtrl: NavController) {

  }

  map:any;

  ionViewDidLoad() {
    this.sliders.lockSwipes(true);
  }


  mapLoad(event) {
    console.log('Map Ready..');
  }

  index=1;
  changeSlide () {
    this.sliders.lockSwipes(false);
    this.sliders.slideTo(this.index);
    this.index = (this.index)? 0 : 1;
    console.log(this.index);
    this.sliders.lockSwipes(true);
  }

  changeFilters() {
    console.log('changeFilters');
    this.gasPriceApi.find({ }).subscribe((gasPrice) => {
      console.log(gasPrice);
    }, (e) => {
      console.error(e);
    });
  }


}
