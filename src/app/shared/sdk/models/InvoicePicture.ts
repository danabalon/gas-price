/* tslint:disable */

declare var Object: any;
export interface InvoicePictureInterface {
  "creationDate": Date;
  "s3Bucket": string;
  "s3Key": string;
  "thumbnail": string;
  "id"?: any;
  "maintenanceId"?: any;
}

export class InvoicePicture implements InvoicePictureInterface {
  "creationDate": Date;
  "s3Bucket": string;
  "s3Key": string;
  "thumbnail": string;
  "id": any;
  "maintenanceId": any;
  constructor(data?: InvoicePictureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InvoicePicture`.
   */
  public static getModelName() {
    return "InvoicePicture";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InvoicePicture for dynamic purposes.
  **/
  public static factory(data: InvoicePictureInterface): InvoicePicture{
    return new InvoicePicture(data);
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
      name: 'InvoicePicture',
      plural: 'InvoicePictures',
      properties: {
        "creationDate": {
          name: 'creationDate',
          type: 'Date'
        },
        "s3Bucket": {
          name: 's3Bucket',
          type: 'string'
        },
        "s3Key": {
          name: 's3Key',
          type: 'string'
        },
        "thumbnail": {
          name: 'thumbnail',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "maintenanceId": {
          name: 'maintenanceId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
