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
import SupportedCountry from './SupportedCountry';

/**
 * The RestApiArrayResultSupportedCountry model module.
 * @module model/RestApiArrayResultSupportedCountry
 * @version 1.0.0
 */
class RestApiArrayResultSupportedCountry {
    /**
     * Constructs a new <code>RestApiArrayResultSupportedCountry</code>.
     * Rest api array result
     * @alias module:model/RestApiArrayResultSupportedCountry
     * @param Data {Array.<module:model/SupportedCountry>} Generic data object.
     */
    constructor(Data) { 
        
        RestApiArrayResultSupportedCountry.initialize(this, Data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Data) { 
        obj['Data'] = Data;
    }

    /**
     * Constructs a <code>RestApiArrayResultSupportedCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiArrayResultSupportedCountry} obj Optional instance to populate.
     * @return {module:model/RestApiArrayResultSupportedCountry} The populated <code>RestApiArrayResultSupportedCountry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiArrayResultSupportedCountry();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [SupportedCountry]);
            }
        }
        return obj;
    }


}

/**
 * Generic data object.
 * @member {Array.<module:model/SupportedCountry>} Data
 */
RestApiArrayResultSupportedCountry.prototype['Data'] = undefined;






export default RestApiArrayResultSupportedCountry;

