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
 * The TaxRate model module.
 * @module model/TaxRate
 * @version 1.0.0
 */
class TaxRate {
    /**
     * Constructs a new <code>TaxRate</code>.
     * @alias module:model/TaxRate
     */
    constructor() { 
        
        TaxRate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxRate} obj Optional instance to populate.
     * @return {module:model/TaxRate} The populated <code>TaxRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxRate();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Percentage')) {
                obj['Percentage'] = ApiClient.convertToType(data['Percentage'], 'Number');
            }
            if (data.hasOwnProperty('Total')) {
                obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
TaxRate.prototype['Name'] = undefined;

/**
 * @member {Number} Percentage
 */
TaxRate.prototype['Percentage'] = undefined;

/**
 * @member {Number} Total
 */
TaxRate.prototype['Total'] = undefined;






export default TaxRate;

