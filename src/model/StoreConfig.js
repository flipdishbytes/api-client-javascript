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
 * The StoreConfig model module.
 * @module model/StoreConfig
 * @version 1.0.0
 */
class StoreConfig {
    /**
     * Constructs a new <code>StoreConfig</code>.
     * @alias module:model/StoreConfig
     */
    constructor() { 
        
        StoreConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreConfig} obj Optional instance to populate.
     * @return {module:model/StoreConfig} The populated <code>StoreConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreConfig();

            if (data.hasOwnProperty('PickupEnabled')) {
                obj['PickupEnabled'] = ApiClient.convertToType(data['PickupEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('BankAccountAttached')) {
                obj['BankAccountAttached'] = ApiClient.convertToType(data['BankAccountAttached'], 'Boolean');
            }
            if (data.hasOwnProperty('MenuAssigned')) {
                obj['MenuAssigned'] = ApiClient.convertToType(data['MenuAssigned'], 'Boolean');
            }
            if (data.hasOwnProperty('HasFullAddress')) {
                obj['HasFullAddress'] = ApiClient.convertToType(data['HasFullAddress'], 'Boolean');
            }
            if (data.hasOwnProperty('PickupHours')) {
                obj['PickupHours'] = ApiClient.convertToType(data['PickupHours'], 'Boolean');
            }
            if (data.hasOwnProperty('IsPublished')) {
                obj['IsPublished'] = ApiClient.convertToType(data['IsPublished'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * True if the store accepts pickup orders
 * @member {Boolean} PickupEnabled
 */
StoreConfig.prototype['PickupEnabled'] = undefined;

/**
 * True if the store has a Bank Account attached
 * @member {Boolean} BankAccountAttached
 */
StoreConfig.prototype['BankAccountAttached'] = undefined;

/**
 * True if the store is assigned to a Menu
 * @member {Boolean} MenuAssigned
 */
StoreConfig.prototype['MenuAssigned'] = undefined;

/**
 * True if the store has a valid Address
 * @member {Boolean} HasFullAddress
 */
StoreConfig.prototype['HasFullAddress'] = undefined;

/**
 * True if the store has Pickup hours
 * @member {Boolean} PickupHours
 */
StoreConfig.prototype['PickupHours'] = undefined;

/**
 * Is the Store Published
 * @member {Boolean} IsPublished
 */
StoreConfig.prototype['IsPublished'] = undefined;






export default StoreConfig;

