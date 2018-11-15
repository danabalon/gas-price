import {Component, ViewChild} from '@angular/core';
import {LoadingController, NavController, Slides} from 'ionic-angular';
import {GasPriceApi} from "../../app/shared/sdk/services/custom";
import {GasPrice} from "../../app/shared/sdk/models";
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
  gasType = 2;
  company = 2;

  styles: any[] = [
    // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  ];
  companys:GasPrice[];
  index=1;
  @ViewChild('sliders') sliders: Slides;
  maps;

  constructor(private gasPriceApi: GasPriceApi,
              private loadingCrtl:LoadingController,
              public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.sliders.lockSwipes(true);
    this.searchGas();

  }

  mapLoad(event) {
    console.log('Map Ready..');
    this.maps = event;
    console.log(this.maps);
  }

  changeSlide() {
    this.sliders.lockSwipes(false);
    this.sliders.slideTo(this.index);
    this.index = (this.index)? 0 : 1;
    console.log(this.index);
    this.sliders.lockSwipes(true);
  }

  searchGas() {
    console.log('changeFilters');
    const filter = {
     where: {
       localidad: 'NEUQUEN',
       idempresabandera: this.company,
       idproducto: this.gasType,
     },
    };
    const loading = this.loadingCrtl.create({ content: 'Cargando...'});
    this.gasPriceApi.find(filter).subscribe((gasPrice: GasPrice[]) => {
      loading.dismissAll();
      this.companys = gasPrice;
      this.companys.forEach((comp) => {
        console.log(comp.longitud);
        console.log(comp.latitud);
      });
      console.log(gasPrice);
    }, (e) => {
      loading.dismissAll();
      console.error(e);
    });
  }


}
