/* tslint:disable */

declare var Object: any;
export interface CoverageInterface {
  "name": string;
  "description": string;
  "code": string;
  "imageUrl": string;
  "requiresPictures": boolean;
  "requiresCertification": boolean;
  "id"?: any;
  risks?: any[];
  extras?: any[];
}

export class Coverage implements CoverageInterface {
  "name": string;
  "description": string;
  "code": string;
  "imageUrl": string;
  "requiresPictures": boolean;
  "requiresCertification": boolean;
  "id": any;
  risks: any[];
  extras: any[];
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
        "requiresPictures": {
          name: 'requiresPictures',
          type: 'boolean'
        },
        "requiresCertification": {
          name: 'requiresCertification',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        risks: {
          name: 'risks',
          type: 'any[]',
          model: ''
        },
        extras: {
          name: 'extras',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
