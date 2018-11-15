/* tslint:disable */

declare var Object: any;
export interface CardProviderInterface {
  "name": string;
  "code": string;
  "id"?: any;
}

export class CardProvider implements CardProviderInterface {
  "name": string;
  "code": string;
  "id": any;
  constructor(data?: CardProviderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CardProvider`.
   */
  public static getModelName() {
    return "CardProvider";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CardProvider for dynamic purposes.
  **/
  public static factory(data: CardProviderInterface): CardProvider{
    return new CardProvider(data);
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
      name: 'CardProvider',
      plural: 'CardProviders',
      path: 'CardProviders',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
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
