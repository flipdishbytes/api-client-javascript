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
 * The JobAddress model module.
 * @module model/JobAddress
 * @version 1.0.0
 */
class JobAddress {
    /**
     * Constructs a new <code>JobAddress</code>.
     * Job Address
     * @alias module:model/JobAddress
     */
    constructor() { 
        
        JobAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobAddress} obj Optional instance to populate.
     * @return {module:model/JobAddress} The populated <code>JobAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobAddress();

            if (data.hasOwnProperty('Street')) {
                obj['Street'] = ApiClient.convertToType(data['Street'], 'String');
            }
            if (data.hasOwnProperty('Postcode')) {
                obj['Postcode'] = ApiClient.convertToType(data['Postcode'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('Zone')) {
                obj['Zone'] = ApiClient.convertToType(data['Zone'], 'String');
            }
            if (data.hasOwnProperty('FormattedAddress')) {
                obj['FormattedAddress'] = ApiClient.convertToType(data['FormattedAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Street
 * @member {String} Street
 */
JobAddress.prototype['Street'] = undefined;

/**
 * Postcode
 * @member {String} Postcode
 */
JobAddress.prototype['Postcode'] = undefined;

/**
 * City
 * @member {String} City
 */
JobAddress.prototype['City'] = undefined;

/**
 * Country
 * @member {String} Country
 */
JobAddress.prototype['Country'] = undefined;

/**
 * Zone
 * @member {String} Zone
 */
JobAddress.prototype['Zone'] = undefined;

/**
 * Formatted Address
 * @member {String} FormattedAddress
 */
JobAddress.prototype['FormattedAddress'] = undefined;






export default JobAddress;

