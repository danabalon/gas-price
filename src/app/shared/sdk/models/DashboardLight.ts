/* tslint:disable */

declare var Object: any;
export interface DashboardLightInterface {
  "lightIcon": string;
  "lightName": string;
  "lightDescription": string;
  "color": string;
  "id"?: any;
}

export class DashboardLight implements DashboardLightInterface {
  "lightIcon": string;
  "lightName": string;
  "lightDescription": string;
  "color": string;
  "id": any;
  constructor(data?: DashboardLightInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DashboardLight`.
   */
  public static getModelName() {
    return "DashboardLight";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DashboardLight for dynamic purposes.
  **/
  public static factory(data: DashboardLightInterface): DashboardLight{
    return new DashboardLight(data);
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
      name: 'DashboardLight',
      plural: 'DashboardLights',
      path: 'DashboardLights',
      idName: 'id',
      properties: {
        "lightIcon": {
          name: 'lightIcon',
          type: 'string'
        },
        "lightName": {
          name: 'lightName',
          type: 'string'
        },
        "lightDescription": {
          name: 'lightDescription',
          type: 'string'
        },
        "color": {
          name: 'color',
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
