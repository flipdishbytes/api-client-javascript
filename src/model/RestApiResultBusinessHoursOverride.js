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
import BusinessHoursOverride from './BusinessHoursOverride';

/**
 * The RestApiResultBusinessHoursOverride model module.
 * @module model/RestApiResultBusinessHoursOverride
 * @version 1.0.0
 */
class RestApiResultBusinessHoursOverride {
    /**
     * Constructs a new <code>RestApiResultBusinessHoursOverride</code>.
     * Rest api result
     * @alias module:model/RestApiResultBusinessHoursOverride
     * @param Data {module:model/BusinessHoursOverride} 
     */
    constructor(Data) { 
        
        RestApiResultBusinessHoursOverride.initialize(this, Data);
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
     * Constructs a <code>RestApiResultBusinessHoursOverride</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultBusinessHoursOverride} obj Optional instance to populate.
     * @return {module:model/RestApiResultBusinessHoursOverride} The populated <code>RestApiResultBusinessHoursOverride</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultBusinessHoursOverride();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = BusinessHoursOverride.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BusinessHoursOverride} Data
 */
RestApiResultBusinessHoursOverride.prototype['Data'] = undefined;






export default RestApiResultBusinessHoursOverride;

