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
 * The FulfillmentStatesConfiguredStore model module.
 * @module model/FulfillmentStatesConfiguredStore
 * @version 1.0.0
 */
class FulfillmentStatesConfiguredStore {
    /**
     * Constructs a new <code>FulfillmentStatesConfiguredStore</code>.
     * Configured stores
     * @alias module:model/FulfillmentStatesConfiguredStore
     */
    constructor() { 
        
        FulfillmentStatesConfiguredStore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FulfillmentStatesConfiguredStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FulfillmentStatesConfiguredStore} obj Optional instance to populate.
     * @return {module:model/FulfillmentStatesConfiguredStore} The populated <code>FulfillmentStatesConfiguredStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentStatesConfiguredStore();

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
 * Store id
 * @member {Number} StoreId
 */
FulfillmentStatesConfiguredStore.prototype['StoreId'] = undefined;

/**
 * Name of store
 * @member {String} Name
 */
FulfillmentStatesConfiguredStore.prototype['Name'] = undefined;






export default FulfillmentStatesConfiguredStore;

