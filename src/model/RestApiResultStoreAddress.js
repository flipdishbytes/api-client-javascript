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
import StoreAddress from './StoreAddress';

/**
 * The RestApiResultStoreAddress model module.
 * @module model/RestApiResultStoreAddress
 * @version 1.0.0
 */
class RestApiResultStoreAddress {
    /**
     * Constructs a new <code>RestApiResultStoreAddress</code>.
     * Rest api result
     * @alias module:model/RestApiResultStoreAddress
     * @param Data {module:model/StoreAddress} 
     */
    constructor(Data) { 
        
        RestApiResultStoreAddress.initialize(this, Data);
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
     * Constructs a <code>RestApiResultStoreAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultStoreAddress} obj Optional instance to populate.
     * @return {module:model/RestApiResultStoreAddress} The populated <code>RestApiResultStoreAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultStoreAddress();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = StoreAddress.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StoreAddress} Data
 */
RestApiResultStoreAddress.prototype['Data'] = undefined;






export default RestApiResultStoreAddress;

