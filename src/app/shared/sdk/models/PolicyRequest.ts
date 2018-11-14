/* tslint:disable */
import {
  Estimate,
  Client,
  InsuranceAgent,
  VehicleData,
  DocumentType,
  Gender
} from '../index';

declare var Object: any;
export interface PolicyRequestInterface {
  "active": boolean;
  "startDate": Date;
  "expirationDate": Date;
  "firstName"?: string;
  "lastName"?: string;
  "cuit"?: string;
  "documentNumber"?: string;
  "birthDate"?: Date;
  "email": string;
  "cellphone": string;
  "address"?: string;
  "zipCode": string;
  "id"?: any;
  "estimateId"?: any;
  "clientId"?: any;
  "paymentDataId"?: any;
  "insuranceAgentId"?: any;
  "vehicleDataId"?: any;
  "documentTypeId"?: any;
  "genderId"?: any;
  estimate?: Estimate;
  client?: Client;
  paymentData?: any;
  insuranceAgent?: InsuranceAgent;
  vehicleData?: VehicleData;
  documentType?: DocumentType;
  gender?: Gender;
}

export class PolicyRequest implements PolicyRequestInterface {
  "active": boolean;
  "startDate": Date;
  "expirationDate": Date;
  "firstName": string;
  "lastName": string;
  "cuit": string;
  "documentNumber": string;
  "birthDate": Date;
  "email": string;
  "cellphone": string;
  "address": string;
  "zipCode": string;
  "id": any;
  "estimateId": any;
  "clientId": any;
  "paymentDataId": any;
  "insuranceAgentId": any;
  "vehicleDataId": any;
  "documentTypeId": any;
  "genderId": any;
  estimate: Estimate;
  client: Client;
  paymentData: any;
  insuranceAgent: InsuranceAgent;
  vehicleData: VehicleData;
  documentType: DocumentType;
  gender: Gender;
  constructor(data?: PolicyRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PolicyRequest`.
   */
  public static getModelName() {
    return "PolicyRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PolicyRequest for dynamic purposes.
  **/
  public static factory(data: PolicyRequestInterface): PolicyRequest{
    return new PolicyRequest(data);
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
      name: 'PolicyRequest',
      plural: 'PolicyRequests',
      properties: {
        "active": {
          name: 'active',
          type: 'boolean'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "expirationDate": {
          name: 'expirationDate',
          type: 'Date'
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'string'
        },
        "documentNumber": {
          name: 'documentNumber',
          type: 'string'
        },
        "birthDate": {
          name: 'birthDate',
          type: 'Date'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "cellphone": {
          name: 'cellphone',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "zipCode": {
          name: 'zipCode',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "estimateId": {
          name: 'estimateId',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "paymentDataId": {
          name: 'paymentDataId',
          type: 'any'
        },
        "insuranceAgentId": {
          name: 'insuranceAgentId',
          type: 'any'
        },
        "vehicleDataId": {
          name: 'vehicleDataId',
          type: 'any'
        },
        "documentTypeId": {
          name: 'documentTypeId',
          type: 'any'
        },
        "genderId": {
          name: 'genderId',
          type: 'any'
        },
      },
      relations: {
        estimate: {
          name: 'estimate',
          type: 'Estimate',
          model: 'Estimate'
        },
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client'
        },
        paymentData: {
          name: 'paymentData',
          type: 'any',
          model: ''
        },
        insuranceAgent: {
          name: 'insuranceAgent',
          type: 'InsuranceAgent',
          model: 'InsuranceAgent'
        },
        vehicleData: {
          name: 'vehicleData',
          type: 'VehicleData',
          model: 'VehicleData'
        },
        documentType: {
          name: 'documentType',
          type: 'DocumentType',
          model: 'DocumentType'
        },
        gender: {
          name: 'gender',
          type: 'Gender',
          model: 'Gender'
        },
      }
    }
  }
}
