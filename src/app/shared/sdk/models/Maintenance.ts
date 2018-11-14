/* tslint:disable */
import {
  VehicleData,
  MaintenanceItem,
  InvoicePicture
} from '../index';

declare var Object: any;
export interface MaintenanceInterface {
  "name"?: string;
  "description"?: string;
  "date": Date;
  "price"?: number;
  "km"?: number;
  "id"?: any;
  "vehicleDataId"?: any;
  "VehicleDataId"?: any;
  vehicleData?: VehicleData;
  VehicleData?: VehicleData;
  maintenanceItems?: MaintenanceItem[];
  invoicePictures?: InvoicePicture[];
}

export class Maintenance implements MaintenanceInterface {
  "name": string;
  "description": string;
  "date": Date;
  "price": number;
  "km": number;
  "id": any;
  "vehicleDataId": any;
  "VehicleDataId": any;
  vehicleData: VehicleData;
  VehicleData: VehicleData;
  maintenanceItems: MaintenanceItem[];
  invoicePictures: InvoicePicture[];
  constructor(data?: MaintenanceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Maintenance`.
   */
  public static getModelName() {
    return "Maintenance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Maintenance for dynamic purposes.
  **/
  public static factory(data: MaintenanceInterface): Maintenance{
    return new Maintenance(data);
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
      name: 'Maintenance',
      plural: 'Maintenances',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
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
        "km": {
          name: 'km',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "vehicleDataId": {
          name: 'vehicleDataId',
          type: 'any'
        },
        "VehicleDataId": {
          name: 'VehicleDataId',
          type: 'any'
        },
      },
      relations: {
        vehicleData: {
          name: 'vehicleData',
          type: 'VehicleData',
          model: 'VehicleData'
        },
        VehicleData: {
          name: 'VehicleData',
          type: 'VehicleData',
          model: 'VehicleData'
        },
        maintenanceItems: {
          name: 'maintenanceItems',
          type: 'MaintenanceItem[]',
          model: 'MaintenanceItem'
        },
        invoicePictures: {
          name: 'invoicePictures',
          type: 'InvoicePicture[]',
          model: 'InvoicePicture'
        },
      }
    }
  }
}
