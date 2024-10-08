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
import OrderBatch from './OrderBatch';

/**
 * The RestApiResultOrderBatch model module.
 * @module model/RestApiResultOrderBatch
 * @version 1.0.0
 */
class RestApiResultOrderBatch {
    /**
     * Constructs a new <code>RestApiResultOrderBatch</code>.
     * Rest api result
     * @alias module:model/RestApiResultOrderBatch
     * @param Data {module:model/OrderBatch} 
     */
    constructor(Data) { 
        
        RestApiResultOrderBatch.initialize(this, Data);
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
     * Constructs a <code>RestApiResultOrderBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultOrderBatch} obj Optional instance to populate.
     * @return {module:model/RestApiResultOrderBatch} The populated <code>RestApiResultOrderBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultOrderBatch();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = OrderBatch.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OrderBatch} Data
 */
RestApiResultOrderBatch.prototype['Data'] = undefined;






export default RestApiResultOrderBatch;

