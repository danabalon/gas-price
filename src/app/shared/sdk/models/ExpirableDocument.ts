/* tslint:disable */
import {
  Client
} from '../index';

declare var Object: any;
export interface ExpirableDocumentInterface {
  "documentName": string;
  "expirationDate": Date;
  "notificationTime": Date;
  "description": string;
  "notified"?: boolean;
  "id"?: any;
  "clientId"?: any;
  client?: Client;
}

export class ExpirableDocument implements ExpirableDocumentInterface {
  "documentName": string;
  "expirationDate": Date;
  "notificationTime": Date;
  "description": string;
  "notified": boolean;
  "id": any;
  "clientId": any;
  client: Client;
  constructor(data?: ExpirableDocumentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExpirableDocument`.
   */
  public static getModelName() {
    return "ExpirableDocument";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExpirableDocument for dynamic purposes.
  **/
  public static factory(data: ExpirableDocumentInterface): ExpirableDocument{
    return new ExpirableDocument(data);
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
      name: 'ExpirableDocument',
      plural: 'ExpirableDocuments',
      path: 'ExpirableDocuments',
      idName: 'id',
      properties: {
        "documentName": {
          name: 'documentName',
          type: 'string'
        },
        "expirationDate": {
          name: 'expirationDate',
          type: 'Date'
        },
        "notificationTime": {
          name: 'notificationTime',
          type: 'Date'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "notified": {
          name: 'notified',
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
      },
      relations: {
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
