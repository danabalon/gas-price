/* tslint:disable */

declare var Object: any;
export interface BankAccountTypeInterface {
  "name": string;
  "code": string;
  "id"?: any;
}

export class BankAccountType implements BankAccountTypeInterface {
  "name": string;
  "code": string;
  "id": any;
  constructor(data?: BankAccountTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BankAccountType`.
   */
  public static getModelName() {
    return "BankAccountType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BankAccountType for dynamic purposes.
  **/
  public static factory(data: BankAccountTypeInterface): BankAccountType{
    return new BankAccountType(data);
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
      name: 'BankAccountType',
      plural: 'BankAccountTypes',
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
