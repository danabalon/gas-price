/* tslint:disable */
import {
  Client,
  VehicleData,
  InvoicePicture,
  OilChangeService,
  OtherService
} from '../index';

declare var Object: any;
export interface CarServiceInterface {
  "description": string;
  "date": Date;
  "price"?: number;
  "id"?: any;
  "clientId"?: any;
  "VehicleDataId"?: any;
  "oilChangeServiceId"?: any;
  "otherServiceId"?: any;
  client?: Client;
  VehicleData?: VehicleData;
  invoicePicture?: InvoicePicture[];
  oilChangeService?: OilChangeService;
  otherService?: OtherService;
}

export class CarService implements CarServiceInterface {
  "description": string;
  "date": Date;
  "price": number;
  "id": any;
  "clientId": any;
  "VehicleDataId": any;
  "oilChangeServiceId": any;
  "otherServiceId": any;
  client: Client;
  VehicleData: VehicleData;
  invoicePicture: InvoicePicture[];
  oilChangeService: OilChangeService;
  otherService: OtherService;
  constructor(data?: CarServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CarService`.
   */
  public static getModelName() {
    return "CarService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CarService for dynamic purposes.
  **/
  public static factory(data: CarServiceInterface): CarService{
    return new CarService(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CarService',
      plural: 'CarServices',
      path: 'CarServices',
      idName: 'id',
      properties: {
        "description": {
          name: 'description',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "VehicleDataId": {
          name: 'VehicleDataId',
          type: 'any'
        },
        "oilChangeServiceId": {
          name: 'oilChangeServiceId',
          type: 'any'
        },
        "otherServiceId": {
          name: 'otherServiceId',
          type: 'any'
        },
      },
      relations: {
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client',
          relationType: 'belongsTo',
                  keyFrom: 'clientId',
          keyTo: 'id'
        },
        VehicleData: {
          name: 'VehicleData',
          type: 'VehicleData',
          model: 'VehicleData',
          relationType: 'belongsTo',
                  keyFrom: 'VehicleDataId',
          keyTo: 'id'
        },
        invoicePicture: {
          name: 'invoicePicture',
          type: 'InvoicePicture[]',
          model: 'InvoicePicture',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'carServiceId'
        },
        oilChangeService: {
          name: 'oilChangeService',
          type: 'OilChangeService',
          model: 'OilChangeService',
          relationType: 'belongsTo',
                  keyFrom: 'oilChangeServiceId',
          keyTo: 'id'
        },
        otherService: {
          name: 'otherService',
          type: 'OtherService',
          model: 'OtherService',
          relationType: 'belongsTo',
                  keyFrom: 'otherServiceId',
          keyTo: 'id'
        },
      }
    }
  }
}
