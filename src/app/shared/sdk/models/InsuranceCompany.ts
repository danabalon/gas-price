/* tslint:disable */

declare var Object: any;
export interface InsuranceCompanyInterface {
  "email"?: string;
  "webhookUrl"?: string;
  "id"?: any;
}

export class InsuranceCompany implements InsuranceCompanyInterface {
  "email": string;
  "webhookUrl": string;
  "id": any;
  constructor(data?: InsuranceCompanyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InsuranceCompany`.
   */
  public static getModelName() {
    return "InsuranceCompany";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InsuranceCompany for dynamic purposes.
  **/
  public static factory(data: InsuranceCompanyInterface): InsuranceCompany{
    return new InsuranceCompany(data);
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
      name: 'InsuranceCompany',
      plural: 'InsuranceCompanies',
      properties: {
        "email": {
          name: 'email',
          type: 'string'
        },
        "webhookUrl": {
          name: 'webhookUrl',
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
