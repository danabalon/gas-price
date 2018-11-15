/* tslint:disable */
import {
  Applicant,
  Client,
  Estimate
} from '../index';

declare var Object: any;
export interface EstimateRequestInterface {
  "estimateNumber"?: string;
  "brand": string;
  "year": string;
  "model": string;
  "version": string;
  "versionId": string;
  "date": Date;
  "id"?: any;
  "applicantId"?: any;
  "clientId"?: any;
  applicant?: Applicant;
  client?: Client;
  estimates?: Estimate[];
}

export class EstimateRequest implements EstimateRequestInterface {
  "estimateNumber": string;
  "brand": string;
  "year": string;
  "model": string;
  "version": string;
  "versionId": string;
  "date": Date;
  "id": any;
  "applicantId": any;
  "clientId": any;
  applicant: Applicant;
  client: Client;
  estimates: Estimate[];
  constructor(data?: EstimateRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EstimateRequest`.
   */
  public static getModelName() {
    return "EstimateRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EstimateRequest for dynamic purposes.
  **/
  public static factory(data: EstimateRequestInterface): EstimateRequest{
    return new EstimateRequest(data);
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
      name: 'EstimateRequest',
      plural: 'EstimateRequests',
      path: 'EstimateRequests',
      idName: 'id',
      properties: {
        "estimateNumber": {
          name: 'estimateNumber',
          type: 'string'
        },
        "brand": {
          name: 'brand',
          type: 'string'
        },
        "year": {
          name: 'year',
          type: 'string'
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "version": {
          name: 'version',
          type: 'string'
        },
        "versionId": {
          name: 'versionId',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "applicantId": {
          name: 'applicantId',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
      },
      relations: {
        applicant: {
          name: 'applicant',
          type: 'Applicant',
          model: 'Applicant',
          relationType: 'belongsTo',
                  keyFrom: 'applicantId',
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
        estimates: {
          name: 'estimates',
          type: 'Estimate[]',
          model: 'Estimate',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'estimateRequestId'
        },
      }
    }
  }
}
