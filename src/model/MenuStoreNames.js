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
 * The MenuStoreNames model module.
 * @module model/MenuStoreNames
 * @version 1.0.0
 */
class MenuStoreNames {
    /**
     * Constructs a new <code>MenuStoreNames</code>.
     * Menu Store Names
     * @alias module:model/MenuStoreNames
     */
    constructor() { 
        
        MenuStoreNames.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuStoreNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuStoreNames} obj Optional instance to populate.
     * @return {module:model/MenuStoreNames} The populated <code>MenuStoreNames</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuStoreNames();

            if (data.hasOwnProperty('StoreNames')) {
                obj['StoreNames'] = ApiClient.convertToType(data['StoreNames'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Names of stores associated with menu
 * @member {Array.<String>} StoreNames
 */
MenuStoreNames.prototype['StoreNames'] = undefined;






export default MenuStoreNames;

