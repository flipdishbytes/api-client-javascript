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
import ApmDataPoint from './ApmDataPoint';

/**
 * The RestApiArrayResultApmDataPoint model module.
 * @module model/RestApiArrayResultApmDataPoint
 * @version 1.0.0
 */
class RestApiArrayResultApmDataPoint {
    /**
     * Constructs a new <code>RestApiArrayResultApmDataPoint</code>.
     * Rest api array result
     * @alias module:model/RestApiArrayResultApmDataPoint
     * @param Data {Array.<module:model/ApmDataPoint>} Generic data object.
     */
    constructor(Data) { 
        
        RestApiArrayResultApmDataPoint.initialize(this, Data);
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
     * Constructs a <code>RestApiArrayResultApmDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiArrayResultApmDataPoint} obj Optional instance to populate.
     * @return {module:model/RestApiArrayResultApmDataPoint} The populated <code>RestApiArrayResultApmDataPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiArrayResultApmDataPoint();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [ApmDataPoint]);
            }
        }
        return obj;
    }


}

/**
 * Generic data object.
 * @member {Array.<module:model/ApmDataPoint>} Data
 */
RestApiArrayResultApmDataPoint.prototype['Data'] = undefined;






export default RestApiArrayResultApmDataPoint;

