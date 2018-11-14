/* tslint:disable */

declare var Object: any;
export interface ApplicantInterface {
  "firstName": string;
  "lastName": string;
  "zipCode": string;
  "cellphone": string;
  "city": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  accessTokens?: any[];
}

export class Applicant implements ApplicantInterface {
  "firstName": string;
  "lastName": string;
  "zipCode": string;
  "cellphone": string;
  "city": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  accessTokens: any[];
  constructor(data?: ApplicantInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Applicant`.
   */
  public static getModelName() {
    return "Applicant";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Applicant for dynamic purposes.
  **/
  public static factory(data: ApplicantInterface): Applicant{
    return new Applicant(data);
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
      name: 'Applicant',
      plural: 'Applicants',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "zipCode": {
          name: 'zipCode',
          type: 'string'
        },
        "cellphone": {
          name: 'cellphone',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
