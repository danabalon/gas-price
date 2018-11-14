import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

  }

  map:any;
  searchBox:any;

  ionViewDidLoad() {
    this.sliders.lockSwipes(true);
  }


  mapLoad(event) {
    console.log('Map Ready..');
    this.map = event;
    const input = document.getElementById('Map-Search');
    this.searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById('view-page'));
    this.searchBox.addListener('places_changed', () => this.goToSearchedPlace());
  }

  goToSearchedPlace() {
    const places = this.searchBox.getPlaces();
    if (places.length === 0) {
      return;
    }
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    this.map.fitBounds(bounds);
  }

  changeSlide () {
    this.sliders.lockSwipes(false);
    this.sliders.slideNext();
    this.sliders.lockSwipes(true);

  }

}
