/* tslint:disable */
import {
  Risk
} from '../index';

declare var Object: any;
export interface CoverageInterface {
  "name": string;
  "description": string;
  "code": string;
  "imageUrl": string;
  "id"?: any;
  risks?: Risk[];
}

export class Coverage implements CoverageInterface {
  "name": string;
  "description": string;
  "code": string;
  "imageUrl": string;
  "id": any;
  risks: Risk[];
  constructor(data?: CoverageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Coverage`.
   */
  public static getModelName() {
    return "Coverage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Coverage for dynamic purposes.
  **/
  public static factory(data: CoverageInterface): Coverage{
    return new Coverage(data);
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
      name: 'Coverage',
      plural: 'Coverages',
      path: 'Coverages',
      idName: 'id',
      properties: {
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
        "imageUrl": {
          name: 'imageUrl',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        risks: {
          name: 'risks',
          type: 'Risk[]',
          model: 'Risk',
          relationType: 'hasMany',
          modelThrough: 'CoverageRisk',
          keyThrough: 'riskId',
          keyFrom: 'id',
          keyTo: 'coverageId'
        },
      }
    }
  }
}
