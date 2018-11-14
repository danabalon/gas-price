/* tslint:disable */
import {
  InsuranceAgent
} from '../index';

declare var Object: any;
export interface ClientInterface {
  "firstName": string;
  "lastName": string;
  "cellphone": string;
  "zipCode": string;
  "city": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "insuranceAgentId"?: any;
  accessTokens?: any[];
  insuranceAgent?: InsuranceAgent;
}

export class Client implements ClientInterface {
  "firstName": string;
  "lastName": string;
  "cellphone": string;
  "zipCode": string;
  "city": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "insuranceAgentId": any;
  accessTokens: any[];
  insuranceAgent: InsuranceAgent;
  constructor(data?: ClientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public static getModelName() {
    return "Client";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Client for dynamic purposes.
  **/
  public static factory(data: ClientInterface): Client{
    return new Client(data);
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
      name: 'Client',
      plural: 'Clients',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "cellphone": {
          name: 'cellphone',
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
        "insuranceAgentId": {
          name: 'insuranceAgentId',
          type: 'any'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        insuranceAgent: {
          name: 'insuranceAgent',
          type: 'InsuranceAgent',
          model: 'InsuranceAgent'
        },
      }
    }
  }
}
