/* tslint:disable */

declare var Object: any;
export interface DocumentTypeInterface {
  "name": string;
  "description": string;
  "code": string;
  "id"?: any;
}

export class DocumentType implements DocumentTypeInterface {
  "name": string;
  "description": string;
  "code": string;
  "id": any;
  constructor(data?: DocumentTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DocumentType`.
   */
  public static getModelName() {
    return "DocumentType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DocumentType for dynamic purposes.
  **/
  public static factory(data: DocumentTypeInterface): DocumentType{
    return new DocumentType(data);
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
      name: 'DocumentType',
      plural: 'DocumentTypes',
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
