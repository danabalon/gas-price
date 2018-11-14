/* tslint:disable */

declare var Object: any;
export interface VehicleDataInterface {
  "brand": string;
  "model": string;
  "version": string;
  "year": string;
  "licensePlate"?: string;
  "chasisNumber"?: string;
  "engineNumber"?: string;
  "id"?: any;
}

export class VehicleData implements VehicleDataInterface {
  "brand": string;
  "model": string;
  "version": string;
  "year": string;
  "licensePlate": string;
  "chasisNumber": string;
  "engineNumber": string;
  "id": any;
  constructor(data?: VehicleDataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VehicleData`.
   */
  public static getModelName() {
    return "VehicleData";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VehicleData for dynamic purposes.
  **/
  public static factory(data: VehicleDataInterface): VehicleData{
    return new VehicleData(data);
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
      name: 'VehicleData',
      plural: 'VehicleData',
      properties: {
        "brand": {
          name: 'brand',
          type: 'string'
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "version": {
          name: 'version',
          type: 'string'
        },
        "year": {
          name: 'year',
          type: 'string'
        },
        "licensePlate": {
          name: 'licensePlate',
          type: 'string'
        },
        "chasisNumber": {
          name: 'chasisNumber',
          type: 'string'
        },
        "engineNumber": {
          name: 'engineNumber',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
