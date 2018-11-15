/* tslint:disable */

declare var Object: any;
export interface RiskInterface {
  "name": string;
  "description": string;
  "imageUrl": string;
  "id"?: any;
}

export class Risk implements RiskInterface {
  "name": string;
  "description": string;
  "imageUrl": string;
  "id": any;
  constructor(data?: RiskInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Risk`.
   */
  public static getModelName() {
    return "Risk";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Risk for dynamic purposes.
  **/
  public static factory(data: RiskInterface): Risk{
    return new Risk(data);
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
      name: 'Risk',
      plural: 'Risks',
      path: 'Risks',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "imageUrl": {
          name: 'imageUrl',
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
