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
 * The ConfiguredStore model module.
 * @module model/ConfiguredStore
 * @version 1.0.0
 */
class ConfiguredStore {
    /**
     * Constructs a new <code>ConfiguredStore</code>.
     * @alias module:model/ConfiguredStore
     */
    constructor() { 
        
        ConfiguredStore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfiguredStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfiguredStore} obj Optional instance to populate.
     * @return {module:model/ConfiguredStore} The populated <code>ConfiguredStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfiguredStore();

            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} StoreId
 */
ConfiguredStore.prototype['StoreId'] = undefined;

/**
 * @member {String} Name
 */
ConfiguredStore.prototype['Name'] = undefined;






export default ConfiguredStore;

