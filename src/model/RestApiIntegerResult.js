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
 * The RestApiIntegerResult model module.
 * @module model/RestApiIntegerResult
 * @version 1.0.0
 */
class RestApiIntegerResult {
    /**
     * Constructs a new <code>RestApiIntegerResult</code>.
     * Rest api integer result
     * @alias module:model/RestApiIntegerResult
     * @param Data {Number} Data integer
     */
    constructor(Data) { 
        
        RestApiIntegerResult.initialize(this, Data);
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
     * Constructs a <code>RestApiIntegerResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiIntegerResult} obj Optional instance to populate.
     * @return {module:model/RestApiIntegerResult} The populated <code>RestApiIntegerResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiIntegerResult();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Data integer
 * @member {Number} Data
 */
RestApiIntegerResult.prototype['Data'] = undefined;






export default RestApiIntegerResult;

