/* tslint:disable */

declare var Object: any;
export interface OtherServiceInterface {
  "kmsAtService": string;
  "serviceName": string;
  "id"?: any;
}

export class OtherService implements OtherServiceInterface {
  "kmsAtService": string;
  "serviceName": string;
  "id": any;
  constructor(data?: OtherServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OtherService`.
   */
  public static getModelName() {
    return "OtherService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OtherService for dynamic purposes.
  **/
  public static factory(data: OtherServiceInterface): OtherService{
    return new OtherService(data);
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
      name: 'OtherService',
      plural: 'OtherServices',
      path: 'OtherServices',
      idName: 'id',
      properties: {
        "kmsAtService": {
          name: 'kmsAtService',
          type: 'string'
        },
        "serviceName": {
          name: 'serviceName',
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
