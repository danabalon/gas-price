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
  gasType = "2";
  company = "YPF";

  styles: any[] = [
    // {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  ];
  companys:GasPrice[];
  index=1;
  @ViewChild('sliders') sliders: Slides;
  maps;
  brands=[];

  constructor(private gasPriceApi: GasPriceApi,
              private loadingCrtl:LoadingController,
              public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.sliders.lockSwipes(true);
    this.searchGasInMyPosition();
  }

  getBrands() {
    const coords = this.maps.getCenter();
    this.gasPriceApi.getBrandsNear(coords.lat(), coords.lng(), 10000).subscribe((brands) => {
      this.brands = brands;
      console.log(this.brands);
    }, (error) => {
      console.error(error);
      // TODO ALERt
    });
  }

  mapLoad(event) {
    this.maps = event;
    console.log(this.maps);
    this.getBrands();
  }

  changeSlide() {
    this.sliders.lockSwipes(false);
    this.sliders.slideTo(this.index);
    this.index = (this.index)? 0 : 1;
    this.sliders.lockSwipes(true);
  }

  searchGasInMyPosition() {
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
        console.log(comp.latitud, comp.longitud);
      });
    }, (e) => {
      loading.dismissAll();
      console.error(e);
    });
  }

  // searchGas2() {
  //   console.log('changeFilters');
  //   const filter = {
  //    where: {
  //      localidad: 'NEUQUEN',
  //      idempresabandera: this.company,
  //      idproducto: this.gasType,
  //    },
  //   };
  //   const loading = this.loadingCrtl.create({ content: 'Cargando...'});
  //   this.gasPriceApi.find(filter).subscribe((gasPrice: GasPrice[]) => {
  //     loading.dismissAll();
  //     this.companys = gasPrice;
  //     this.companys.forEach((comp) => {
  //       console.log(comp.longitud);
  //       console.log(comp.latitud);
  //     });
  //     console.log(gasPrice);
  //   }, (e) => {
  //     loading.dismissAll();
  //     console.error(e);
  //   });
  // }

  // TODO detectar evento de arrastre hasta soltar el mapa
  // TODO obtener el tamaño a pasar al endpoint de max
  // TODO No limitar scroll
  // TODO crear un tope minimo para consultar (mostrar mensaje de distancia maxima)

  reloadGasPrice() {
    this.getBrands();
    const filter = {
      where: {
        empresabandera: this.company,
        idproducto: this.gasType,
      },
    };
    const coords = this.maps.getCenter();
    console.log(coords.lat(), coords.lng());
    const loading = this.loadingCrtl.create({ content: 'Cargando...'});
    this.gasPriceApi.getNear(filter, coords.lat(), coords.lng(), 10000).subscribe((gasPrice: GasPrice[]) => {
      loading.dismissAll();
      console.log(gasPrice);
      this.companys = gasPrice;
      this.companys.forEach((comp) => {
        console.log(comp.longitud, comp.latitud);
      });
    }, (e) => {
      loading.dismissAll();
      console.error(e);
    });

  }


}
