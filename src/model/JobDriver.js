/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JobDriver model module.
 * @module model/JobDriver
 * @version 1.0.0
 */
class JobDriver {
    /**
     * Constructs a new <code>JobDriver</code>.
     * Job Driver
     * @alias module:model/JobDriver
     */
    constructor() { 
        
        JobDriver.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobDriver</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobDriver} obj Optional instance to populate.
     * @return {module:model/JobDriver} The populated <code>JobDriver</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobDriver();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('DisplayName')) {
                obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
            }
            if (data.hasOwnProperty('Phone')) {
                obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
            }
            if (data.hasOwnProperty('PictureUrl')) {
                obj['PictureUrl'] = ApiClient.convertToType(data['PictureUrl'], 'String');
            }
            if (data.hasOwnProperty('TransportType')) {
                obj['TransportType'] = ApiClient.convertToType(data['TransportType'], 'String');
            }
            if (data.hasOwnProperty('Latitude')) {
                obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
            }
            if (data.hasOwnProperty('Longitude')) {
                obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id
 * @member {Number} Id
 */
JobDriver.prototype['Id'] = undefined;

/**
 * Display Name
 * @member {String} DisplayName
 */
JobDriver.prototype['DisplayName'] = undefined;

/**
 * Phone
 * @member {String} Phone
 */
JobDriver.prototype['Phone'] = undefined;

/**
 * Picture Url
 * @member {String} PictureUrl
 */
JobDriver.prototype['PictureUrl'] = undefined;

/**
 * Transport Type
 * @member {String} TransportType
 */
JobDriver.prototype['TransportType'] = undefined;

/**
 * Latitude
 * @member {Number} Latitude
 */
JobDriver.prototype['Latitude'] = undefined;

/**
 * Longitude
 * @member {Number} Longitude
 */
JobDriver.prototype['Longitude'] = undefined;






export default JobDriver;

