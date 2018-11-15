/* tslint:disable */

declare var Object: any;
export interface PictureInterface {
  "name": string;
  "creationDate": Date;
  "originalName": string;
  "s3Path": string;
  "thumbnail"?: string;
  "s3Bucket": string;
  "id"?: any;
  "segViewDataId"?: any;
  segViewData?: any;
}

export class Picture implements PictureInterface {
  "name": string;
  "creationDate": Date;
  "originalName": string;
  "s3Path": string;
  "thumbnail": string;
  "s3Bucket": string;
  "id": any;
  "segViewDataId": any;
  segViewData: any;
  constructor(data?: PictureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Picture`.
   */
  public static getModelName() {
    return "Picture";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Picture for dynamic purposes.
  **/
  public static factory(data: PictureInterface): Picture{
    return new Picture(data);
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
      name: 'Picture',
      plural: 'Pictures',
      path: 'Pictures',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "creationDate": {
          name: 'creationDate',
          type: 'Date'
        },
        "originalName": {
          name: 'originalName',
          type: 'string'
        },
        "s3Path": {
          name: 's3Path',
          type: 'string'
        },
        "thumbnail": {
          name: 'thumbnail',
          type: 'string'
        },
        "s3Bucket": {
          name: 's3Bucket',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "segViewDataId": {
          name: 'segViewDataId',
          type: 'any'
        },
      },
      relations: {
        segViewData: {
          name: 'segViewData',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'segViewDataId',
          keyTo: 'id'
        },
      }
    }
  }
}
