/* tslint:disable */

declare var Object: any;
export interface MaintenanceItemInterface {
  "description"?: string;
  "name"?: string;
  "id"?: any;
  "maintenanceId"?: any;
}

export class MaintenanceItem implements MaintenanceItemInterface {
  "description": string;
  "name": string;
  "id": any;
  "maintenanceId": any;
  constructor(data?: MaintenanceItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MaintenanceItem`.
   */
  public static getModelName() {
    return "MaintenanceItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MaintenanceItem for dynamic purposes.
  **/
  public static factory(data: MaintenanceItemInterface): MaintenanceItem{
    return new MaintenanceItem(data);
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
      name: 'MaintenanceItem',
      plural: 'MaintenanceItems',
      path: 'MaintenanceItems',
      idName: 'id',
      properties: {
        "description": {
          name: 'description',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "maintenanceId": {
          name: 'maintenanceId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
