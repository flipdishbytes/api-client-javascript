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
import Metadata from './Metadata';

/**
 * The RestApiArrayResultMetadata model module.
 * @module model/RestApiArrayResultMetadata
 * @version 1.0.0
 */
class RestApiArrayResultMetadata {
    /**
     * Constructs a new <code>RestApiArrayResultMetadata</code>.
     * Rest api array result
     * @alias module:model/RestApiArrayResultMetadata
     * @param Data {Array.<module:model/Metadata>} Generic data object.
     */
    constructor(Data) { 
        
        RestApiArrayResultMetadata.initialize(this, Data);
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
     * Constructs a <code>RestApiArrayResultMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiArrayResultMetadata} obj Optional instance to populate.
     * @return {module:model/RestApiArrayResultMetadata} The populated <code>RestApiArrayResultMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiArrayResultMetadata();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * Generic data object.
 * @member {Array.<module:model/Metadata>} Data
 */
RestApiArrayResultMetadata.prototype['Data'] = undefined;






export default RestApiArrayResultMetadata;

