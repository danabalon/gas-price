/* tslint:disable */

declare var Object: any;
export interface MaintenanceItemPresetInterface {
  "description"?: string;
  "name": string;
  "id"?: any;
}

export class MaintenanceItemPreset implements MaintenanceItemPresetInterface {
  "description": string;
  "name": string;
  "id": any;
  constructor(data?: MaintenanceItemPresetInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MaintenanceItemPreset`.
   */
  public static getModelName() {
    return "MaintenanceItemPreset";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MaintenanceItemPreset for dynamic purposes.
  **/
  public static factory(data: MaintenanceItemPresetInterface): MaintenanceItemPreset{
    return new MaintenanceItemPreset(data);
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
      name: 'MaintenanceItemPreset',
      plural: 'MaintenanceItemPresets',
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
      },
      relations: {
      }
    }
  }
}
