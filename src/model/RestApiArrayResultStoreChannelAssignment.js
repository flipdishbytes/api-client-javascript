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
import StoreChannelAssignment from './StoreChannelAssignment';

/**
 * The RestApiArrayResultStoreChannelAssignment model module.
 * @module model/RestApiArrayResultStoreChannelAssignment
 * @version 1.0.0
 */
class RestApiArrayResultStoreChannelAssignment {
    /**
     * Constructs a new <code>RestApiArrayResultStoreChannelAssignment</code>.
     * Rest api array result
     * @alias module:model/RestApiArrayResultStoreChannelAssignment
     * @param Data {Array.<module:model/StoreChannelAssignment>} Generic data object.
     */
    constructor(Data) { 
        
        RestApiArrayResultStoreChannelAssignment.initialize(this, Data);
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
     * Constructs a <code>RestApiArrayResultStoreChannelAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiArrayResultStoreChannelAssignment} obj Optional instance to populate.
     * @return {module:model/RestApiArrayResultStoreChannelAssignment} The populated <code>RestApiArrayResultStoreChannelAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiArrayResultStoreChannelAssignment();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [StoreChannelAssignment]);
            }
        }
        return obj;
    }


}

/**
 * Generic data object.
 * @member {Array.<module:model/StoreChannelAssignment>} Data
 */
RestApiArrayResultStoreChannelAssignment.prototype['Data'] = undefined;






export default RestApiArrayResultStoreChannelAssignment;

