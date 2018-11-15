/* tslint:disable */
import {
  EstimateRequest,
  PaymentType,
  Coverage
} from '../index';

declare var Object: any;
export interface EstimateInterface {
  "price": string;
  "monthlyFee": string;
  "id"?: any;
  "estimateRequestId"?: any;
  "coverageId"?: any;
  additionals?: any[];
  estimateRequest?: EstimateRequest;
  paymentTypes?: PaymentType[];
  coverage?: Coverage;
}

export class Estimate implements EstimateInterface {
  "price": string;
  "monthlyFee": string;
  "id": any;
  "estimateRequestId": any;
  "coverageId": any;
  additionals: any[];
  estimateRequest: EstimateRequest;
  paymentTypes: PaymentType[];
  coverage: Coverage;
  constructor(data?: EstimateInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Estimate`.
   */
  public static getModelName() {
    return "Estimate";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Estimate for dynamic purposes.
  **/
  public static factory(data: EstimateInterface): Estimate{
    return new Estimate(data);
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
      name: 'Estimate',
      plural: 'Estimates',
      path: 'Estimates',
      idName: 'id',
      properties: {
        "price": {
          name: 'price',
          type: 'string'
        },
        "monthlyFee": {
          name: 'monthlyFee',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "estimateRequestId": {
          name: 'estimateRequestId',
          type: 'any'
        },
        "coverageId": {
          name: 'coverageId',
          type: 'any'
        },
      },
      relations: {
        additionals: {
          name: 'additionals',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'estimateId'
        },
        estimateRequest: {
          name: 'estimateRequest',
          type: 'EstimateRequest',
          model: 'EstimateRequest',
          relationType: 'belongsTo',
                  keyFrom: 'estimateRequestId',
          keyTo: 'id'
        },
        paymentTypes: {
          name: 'paymentTypes',
          type: 'PaymentType[]',
          model: 'PaymentType',
          relationType: 'hasMany',
          modelThrough: 'EstimatePaymentType',
          keyThrough: 'paymentTypeId',
          keyFrom: 'id',
          keyTo: 'estimateId'
        },
        coverage: {
          name: 'coverage',
          type: 'Coverage',
          model: 'Coverage',
          relationType: 'belongsTo',
                  keyFrom: 'coverageId',
          keyTo: 'id'
        },
      }
    }
  }
}
