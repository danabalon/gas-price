/* tslint:disable */
import {
  PolicyRequest,
  InsuranceAgent,
  Client
} from '../index';

declare var Object: any;
export interface PolicyInterface {
  "company": string;
  "certificateNumber": string;
  "branchOffice": string;
  "articleCode": string;
  "price": string;
  "completed": boolean;
  "certificateUrl": string;
  "clausesUrl": string;
  "mercosurCardUrl": string;
  "id"?: any;
  "policyRequestId"?: any;
  "insuranceAgentId"?: any;
  "clientId"?: any;
  policyRequest?: PolicyRequest;
  insuranceAgent?: InsuranceAgent;
  client?: Client;
}

export class Policy implements PolicyInterface {
  "company": string;
  "certificateNumber": string;
  "branchOffice": string;
  "articleCode": string;
  "price": string;
  "completed": boolean;
  "certificateUrl": string;
  "clausesUrl": string;
  "mercosurCardUrl": string;
  "id": any;
  "policyRequestId": any;
  "insuranceAgentId": any;
  "clientId": any;
  policyRequest: PolicyRequest;
  insuranceAgent: InsuranceAgent;
  client: Client;
  constructor(data?: PolicyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Policy`.
   */
  public static getModelName() {
    return "Policy";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Policy for dynamic purposes.
  **/
  public static factory(data: PolicyInterface): Policy{
    return new Policy(data);
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
      name: 'Policy',
      plural: 'Policies',
      path: 'Policies',
      idName: 'id',
      properties: {
        "company": {
          name: 'company',
          type: 'string'
        },
        "certificateNumber": {
          name: 'certificateNumber',
          type: 'string'
        },
        "branchOffice": {
          name: 'branchOffice',
          type: 'string'
        },
        "articleCode": {
          name: 'articleCode',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'string'
        },
        "completed": {
          name: 'completed',
          type: 'boolean'
        },
        "certificateUrl": {
          name: 'certificateUrl',
          type: 'string'
        },
        "clausesUrl": {
          name: 'clausesUrl',
          type: 'string'
        },
        "mercosurCardUrl": {
          name: 'mercosurCardUrl',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "policyRequestId": {
          name: 'policyRequestId',
          type: 'any'
        },
        "insuranceAgentId": {
          name: 'insuranceAgentId',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
      },
      relations: {
        policyRequest: {
          name: 'policyRequest',
          type: 'PolicyRequest',
          model: 'PolicyRequest',
          relationType: 'belongsTo',
                  keyFrom: 'policyRequestId',
          keyTo: 'id'
        },
        insuranceAgent: {
          name: 'insuranceAgent',
          type: 'InsuranceAgent',
          model: 'InsuranceAgent',
          relationType: 'belongsTo',
                  keyFrom: 'insuranceAgentId',
          keyTo: 'id'
        },
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client',
          relationType: 'belongsTo',
                  keyFrom: 'clientId',
          keyTo: 'id'
        },
      }
    }
  }
}
