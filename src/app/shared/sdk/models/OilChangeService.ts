/* tslint:disable */

declare var Object: any;
export interface OilChangeServiceInterface {
  "kmsAtServiceTime": string;
  "id"?: any;
}

export class OilChangeService implements OilChangeServiceInterface {
  "kmsAtServiceTime": string;
  "id": any;
  constructor(data?: OilChangeServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OilChangeService`.
   */
  public static getModelName() {
    return "OilChangeService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OilChangeService for dynamic purposes.
  **/
  public static factory(data: OilChangeServiceInterface): OilChangeService{
    return new OilChangeService(data);
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
      name: 'OilChangeService',
      plural: 'OilChangeServices',
      path: 'OilChangeServices',
      idName: 'id',
      properties: {
        "kmsAtServiceTime": {
          name: 'kmsAtServiceTime',
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
