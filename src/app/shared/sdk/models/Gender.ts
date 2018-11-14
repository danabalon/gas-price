/* tslint:disable */

declare var Object: any;
export interface GenderInterface {
  "name": string;
  "code": string;
  "id"?: any;
}

export class Gender implements GenderInterface {
  "name": string;
  "code": string;
  "id": any;
  constructor(data?: GenderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Gender`.
   */
  public static getModelName() {
    return "Gender";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Gender for dynamic purposes.
  **/
  public static factory(data: GenderInterface): Gender{
    return new Gender(data);
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
      name: 'Gender',
      plural: 'Genders',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "code": {
          name: 'code',
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
