import {Component, ViewChild} from '@angular/core';
import {AlertController, LoadingController, NavController, Platform, Slides} from 'ionic-angular';
import {GasPriceApi} from "../../app/shared/sdk/services/custom";
import {GasPrice} from "../../app/shared/sdk/models";
declare const google: any;
import { Geolocation } from '@ionic-native/geolocation';
import {timeout} from "rxjs/operators";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('sliders') sliders: Slides;
  lat: number;
  lng: number;
  gasType:string = "2";
  company:string = "YPF";
  companys:GasPrice[];

  index:number = 1;
  initialRange:number = 1128.49; // 20
  initialZoom:number = 15;
  maxRange:number = 20000;

  maps;
  brands=[];
  // icon = { url: 'assets/images/favicon.ico', scaledSize: { height: 40, width: 20 }};
  styles: any[] = [
    // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  ];
  screenWidth;
  screenHeight;
  timeout;
  showing = false;


  constructor(private geolocation: Geolocation,
              private gasPriceApi: GasPriceApi,
              private loadingCrtl:LoadingController,
              private platform: Platform,
              private alertCtrl: AlertController,
              public navCtrl: NavController) {

    platform.ready().then((readySource) => {
      this.screenWidth = platform.width();
      this.screenHeight = platform.height();
      this.searchGasInMyPosition();
    });
  }

  ionViewDidLoad() {
    this.sliders.lockSwipes(true);
  }

  mapLoad(event) {
    this.maps = event;
    this.getBrands();
  }

  getBrands() {
    const coords = this.maps.getCenter();
    // const loading = this.loadingCrtl.create({ content: 'Cargando empresas...'});
    // loading.present();
    const metersPerPx = (156512/2) * Math.cos(coords.lat() * Math.PI / 180) / Math.pow(2, this.maps.zoom);
    this.gasPriceApi.getBrandsNear(coords.lat(), coords.lng(), metersPerPx * this.screenHeight).pipe(timeout(15000)).subscribe((brands) => {
      // loading.dismissAll();
      this.brands = brands;
    }, (error) => {
      // loading.dismissAll();
      console.error(error);
      this.alertCtrl.create({
        title: 'Aviso',
        message: 'Problemas para intentar obtener las estaciones de servicio.'
      });
    });
  }

  changeSlide() {
    this.sliders.lockSwipes(false);
    this.sliders.slideTo(this.index);
    this.index = (this.index)? 0 : 1;
    this.sliders.lockSwipes(true);
  }

  searchGasInMyPosition() {
    if (this.platform.is('cordova')) {
      console.log('geolocalizanco');
      const loading = this.loadingCrtl.create({ content: 'Calculando coordenadas...'});
      loading.present();
      this.geolocation.getCurrentPosition({ timeout: 20000}).then((resp) => {
        loading.dismissAll();
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.getNearCompanys();
      }).catch((err) => {
        loading.dismissAll();
        this.alertCtrl.create({
          title: 'Aviso',
          message: 'Problemas al intentar calcular sus coordenadas. Verifique su GPS por favor.',
        });
        console.error(err);
      });
    } else {
      console.log('geoHardcodenado');
      this.lat = -38.954933; // MALON
      this.lng = -68.050773;
      this.getNearCompanys();
    }
  }



  getNearCompanys() {
    const filter = {
      where: {
        empresabandera: this.company,
        idproducto: this.gasType,
        tipohorario: 'Diurno',
      },
    };
    const loading = this.loadingCrtl.create({ content: 'Buscando estaciones de servicios...'});
    loading.present();
    const metersPerPx = (156512/2) * Math.cos(this.lat * Math.PI / 180) / Math.pow(2, this.initialZoom);
    this.gasPriceApi.getNear(filter, this.lat, this.lng, metersPerPx * this.screenHeight).pipe(timeout(20000)).subscribe((gasPrice: GasPrice[]) => {
      loading.dismissAll();
      this.companys = gasPrice;
    }, (e) => {
      loading.dismissAll();
      console.error(e);
      this.alertCtrl.create({
        title: 'Aviso',
        message: 'Problemas para intentar obtener las estaciones de servicio.',
      });
    });
  }

  reloadGasPrice() {
    this.showing = true;
    this.timeout = setTimeout(() => {
      this.showing = false;
      this.getBrands();
      const filter = {
        where: {
          empresabandera: this.company,
          idproducto: this.gasType,
          tipohorario: 'Diurno',
        },
      };
      const coords = this.maps.getCenter();
      const metersPerPx = (156512/2) * Math.cos(coords.lat() * Math.PI / 180) / Math.pow(2, this.maps.zoom);
      if(metersPerPx * this.screenHeight < this.maxRange) {
        this.gasPriceApi.getNear(filter, coords.lat(), coords.lng(), metersPerPx * this.screenHeight).pipe(timeout(20000)).subscribe((gasPrice: GasPrice[]) => {
          this.companys = gasPrice;
          console.log(this.companys);
        }, (e) => {
          this.alertCtrl.create({
            title: 'Aviso',
            message: 'Problemas para intentar obtener las estaciones de servicio.',
          });
          console.error(e);
        });
      }
    },500);
  }

  cancelReloadGasPrice() {
    clearTimeout(this.timeout);
  }


}
