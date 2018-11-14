/* tslint:disable */
import {
  Client,
  Picture,
  Policy,
  InsuranceCompany
} from '../index';

declare var Object: any;
export interface CertificationEventInterface {
  "date": Date;
  "confidence": number;
  "sentToCompany": boolean;
  "completed"?: boolean;
  "alreadyRendered"?: boolean;
  "beingRendered"?: boolean;
  "alreadySigned"?: boolean;
  "beingSigned"?: boolean;
  "alreadyCertified"?: boolean;
  "beingCertified"?: boolean;
  "tmpUploadedFiles": any;
  "tmpUploadedFields": any;
  "tmpUploadedThumbnails": any;
  "isWeaklyCertified": boolean;
  "id"?: any;
  "clientId"?: any;
  "_pictureList"?: Array<any>;
  "policyId"?: any;
  "_certificationData"?: any;
  "segViewDataId"?: any;
  "insuranceCompanyId"?: any;
  "procedureTypeId"?: any;
  "certificateId"?: any;
  client?: Client;
  pictureList?: Picture[];
  policy?: Policy;
  certificationData?: any[];
  segViewData?: any;
  uCertifyData?: any[];
  insuranceCompany?: InsuranceCompany;
  procedureType?: any;
  certificate?: any;
}

export class CertificationEvent implements CertificationEventInterface {
  "date": Date;
  "confidence": number;
  "sentToCompany": boolean;
  "completed": boolean;
  "alreadyRendered": boolean;
  "beingRendered": boolean;
  "alreadySigned": boolean;
  "beingSigned": boolean;
  "alreadyCertified": boolean;
  "beingCertified": boolean;
  "tmpUploadedFiles": any;
  "tmpUploadedFields": any;
  "tmpUploadedThumbnails": any;
  "isWeaklyCertified": boolean;
  "id": any;
  "clientId": any;
  "_pictureList": Array<any>;
  "policyId": any;
  "_certificationData": any;
  "segViewDataId": any;
  "insuranceCompanyId": any;
  "procedureTypeId": any;
  "certificateId": any;
  client: Client;
  pictureList: Picture[];
  policy: Policy;
  certificationData: any[];
  segViewData: any;
  uCertifyData: any[];
  insuranceCompany: InsuranceCompany;
  procedureType: any;
  certificate: any;
  constructor(data?: CertificationEventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CertificationEvent`.
   */
  public static getModelName() {
    return "CertificationEvent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CertificationEvent for dynamic purposes.
  **/
  public static factory(data: CertificationEventInterface): CertificationEvent{
    return new CertificationEvent(data);
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
      name: 'CertificationEvent',
      plural: 'CertificationEvents',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "confidence": {
          name: 'confidence',
          type: 'number'
        },
        "sentToCompany": {
          name: 'sentToCompany',
          type: 'boolean'
        },
        "completed": {
          name: 'completed',
          type: 'boolean'
        },
        "alreadyRendered": {
          name: 'alreadyRendered',
          type: 'boolean'
        },
        "beingRendered": {
          name: 'beingRendered',
          type: 'boolean'
        },
        "alreadySigned": {
          name: 'alreadySigned',
          type: 'boolean'
        },
        "beingSigned": {
          name: 'beingSigned',
          type: 'boolean'
        },
        "alreadyCertified": {
          name: 'alreadyCertified',
          type: 'boolean'
        },
        "beingCertified": {
          name: 'beingCertified',
          type: 'boolean'
        },
        "tmpUploadedFiles": {
          name: 'tmpUploadedFiles',
          type: 'any'
        },
        "tmpUploadedFields": {
          name: 'tmpUploadedFields',
          type: 'any'
        },
        "tmpUploadedThumbnails": {
          name: 'tmpUploadedThumbnails',
          type: 'any'
        },
        "isWeaklyCertified": {
          name: 'isWeaklyCertified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "_pictureList": {
          name: '_pictureList',
          type: 'Array&lt;any&gt;',
          default: <any>[]
        },
        "policyId": {
          name: 'policyId',
          type: 'any'
        },
        "_certificationData": {
          name: '_certificationData',
          type: 'any'
        },
        "segViewDataId": {
          name: 'segViewDataId',
          type: 'any'
        },
        "insuranceCompanyId": {
          name: 'insuranceCompanyId',
          type: 'any'
        },
        "procedureTypeId": {
          name: 'procedureTypeId',
          type: 'any'
        },
        "certificateId": {
          name: 'certificateId',
          type: 'any'
        },
      },
      relations: {
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client'
        },
        pictureList: {
          name: 'pictureList',
          type: 'Picture[]',
          model: 'Picture'
        },
        policy: {
          name: 'policy',
          type: 'Policy',
          model: 'Policy'
        },
        certificationData: {
          name: 'certificationData',
          type: 'any[]',
          model: ''
        },
        segViewData: {
          name: 'segViewData',
          type: 'any',
          model: ''
        },
        uCertifyData: {
          name: 'uCertifyData',
          type: 'any[]',
          model: ''
        },
        insuranceCompany: {
          name: 'insuranceCompany',
          type: 'InsuranceCompany',
          model: 'InsuranceCompany'
        },
        procedureType: {
          name: 'procedureType',
          type: 'any',
          model: ''
        },
        certificate: {
          name: 'certificate',
          type: 'any',
          model: ''
        },
      }
    }
  }
}
