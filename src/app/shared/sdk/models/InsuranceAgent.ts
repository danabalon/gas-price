/* tslint:disable */

declare var Object: any;
export interface InsuranceAgentInterface {
  "firstName": string;
  "lastName": string;
  "agentCode"?: string;
  "zipCode"?: string;
  "city"?: string;
  "cellphone"?: string;
  "province"?: string;
  "address"?: string;
  "isRobot": boolean;
  "imageUrl": string;
  "licenseVerificationUrl": string;
  "licenseNumber": string;
  "cuit": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
}

export class InsuranceAgent implements InsuranceAgentInterface {
  "firstName": string;
  "lastName": string;
  "agentCode": string;
  "zipCode": string;
  "city": string;
  "cellphone": string;
  "province": string;
  "address": string;
  "isRobot": boolean;
  "imageUrl": string;
  "licenseVerificationUrl": string;
  "licenseNumber": string;
  "cuit": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  constructor(data?: InsuranceAgentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InsuranceAgent`.
   */
  public static getModelName() {
    return "InsuranceAgent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InsuranceAgent for dynamic purposes.
  **/
  public static factory(data: InsuranceAgentInterface): InsuranceAgent{
    return new InsuranceAgent(data);
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
      name: 'InsuranceAgent',
      plural: 'InsuranceAgents',
      path: 'InsuranceAgents',
      idName: 'id',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "agentCode": {
          name: 'agentCode',
          type: 'string'
        },
        "zipCode": {
          name: 'zipCode',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "cellphone": {
          name: 'cellphone',
          type: 'string'
        },
        "province": {
          name: 'province',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "isRobot": {
          name: 'isRobot',
          type: 'boolean'
        },
        "imageUrl": {
          name: 'imageUrl',
          type: 'string'
        },
        "licenseVerificationUrl": {
          name: 'licenseVerificationUrl',
          type: 'string'
        },
        "licenseNumber": {
          name: 'licenseNumber',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
