/* tslint:disable */

declare var Object: any;
export interface GasPriceInterface {
  "idempresa": string;
  "cuit": string;
  "empresa": string;
  "direccion": string;
  "provincia": string;
  "localidad": string;
  "region"?: string;
  "idproducto": string;
  "producto": string;
  "idtipohorario": string;
  "tipohorario": string;
  "precio": number;
  "fecha_vigencia": Date;
  "idempresabandera": string;
  "empresabandera": string;
  "latitud": string;
  "longitud": string;
  "geojson": any;
  "lastUpdated": Date;
  "id"?: any;
}

export class GasPrice implements GasPriceInterface {
  "idempresa": string;
  "cuit": string;
  "empresa": string;
  "direccion": string;
  "provincia": string;
  "localidad": string;
  "region": string;
  "idproducto": string;
  "producto": string;
  "idtipohorario": string;
  "tipohorario": string;
  "precio": number;
  "fecha_vigencia": Date;
  "idempresabandera": string;
  "empresabandera": string;
  "latitud": string;
  "longitud": string;
  "geojson": any;
  "lastUpdated": Date;
  "id": any;
  constructor(data?: GasPriceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GasPrice`.
   */
  public static getModelName() {
    return "GasPrice";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GasPrice for dynamic purposes.
  **/
  public static factory(data: GasPriceInterface): GasPrice{
    return new GasPrice(data);
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
      name: 'GasPrice',
      plural: 'GasPrices',
      path: 'GasPrices',
      idName: 'id',
      properties: {
        "idempresa": {
          name: 'idempresa',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'string'
        },
        "empresa": {
          name: 'empresa',
          type: 'string'
        },
        "direccion": {
          name: 'direccion',
          type: 'string'
        },
        "provincia": {
          name: 'provincia',
          type: 'string'
        },
        "localidad": {
          name: 'localidad',
          type: 'string'
        },
        "region": {
          name: 'region',
          type: 'string'
        },
        "idproducto": {
          name: 'idproducto',
          type: 'string'
        },
        "producto": {
          name: 'producto',
          type: 'string'
        },
        "idtipohorario": {
          name: 'idtipohorario',
          type: 'string'
        },
        "tipohorario": {
          name: 'tipohorario',
          type: 'string'
        },
        "precio": {
          name: 'precio',
          type: 'number'
        },
        "fecha_vigencia": {
          name: 'fecha_vigencia',
          type: 'Date'
        },
        "idempresabandera": {
          name: 'idempresabandera',
          type: 'string'
        },
        "empresabandera": {
          name: 'empresabandera',
          type: 'string'
        },
        "latitud": {
          name: 'latitud',
          type: 'string'
        },
        "longitud": {
          name: 'longitud',
          type: 'string'
        },
        "geojson": {
          name: 'geojson',
          type: 'any'
        },
        "lastUpdated": {
          name: 'lastUpdated',
          type: 'Date'
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
