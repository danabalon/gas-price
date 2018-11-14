/* tslint:disable */

declare var Object: any;
export interface PaymentTypeInterface {
  "alias": string;
  "name": string;
  "description": string;
  "code": string;
  "id"?: any;
}

export class PaymentType implements PaymentTypeInterface {
  "alias": string;
  "name": string;
  "description": string;
  "code": string;
  "id": any;
  constructor(data?: PaymentTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaymentType`.
   */
  public static getModelName() {
    return "PaymentType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaymentType for dynamic purposes.
  **/
  public static factory(data: PaymentTypeInterface): PaymentType{
    return new PaymentType(data);
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
      name: 'PaymentType',
      plural: 'PaymentTypes',
      properties: {
        "alias": {
          name: 'alias',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
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
