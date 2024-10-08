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
 * The PendingMenuChanges model module.
 * @module model/PendingMenuChanges
 * @version 1.0.0
 */
class PendingMenuChanges {
    /**
     * Constructs a new <code>PendingMenuChanges</code>.
     * Pending Menu Changes
     * @alias module:model/PendingMenuChanges
     */
    constructor() { 
        
        PendingMenuChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PendingMenuChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingMenuChanges} obj Optional instance to populate.
     * @return {module:model/PendingMenuChanges} The populated <code>PendingMenuChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingMenuChanges();

            if (data.hasOwnProperty('CatalogItemId')) {
                obj['CatalogItemId'] = ApiClient.convertToType(data['CatalogItemId'], 'String');
            }
            if (data.hasOwnProperty('MenuId')) {
                obj['MenuId'] = ApiClient.convertToType(data['MenuId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique catalog item id
 * @member {String} CatalogItemId
 */
PendingMenuChanges.prototype['CatalogItemId'] = undefined;

/**
 * Unique menu id
 * @member {Number} MenuId
 */
PendingMenuChanges.prototype['MenuId'] = undefined;






export default PendingMenuChanges;

