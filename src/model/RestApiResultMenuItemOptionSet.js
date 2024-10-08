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
import MenuItemOptionSet from './MenuItemOptionSet';

/**
 * The RestApiResultMenuItemOptionSet model module.
 * @module model/RestApiResultMenuItemOptionSet
 * @version 1.0.0
 */
class RestApiResultMenuItemOptionSet {
    /**
     * Constructs a new <code>RestApiResultMenuItemOptionSet</code>.
     * Rest api result
     * @alias module:model/RestApiResultMenuItemOptionSet
     * @param Data {module:model/MenuItemOptionSet} 
     */
    constructor(Data) { 
        
        RestApiResultMenuItemOptionSet.initialize(this, Data);
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
     * Constructs a <code>RestApiResultMenuItemOptionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultMenuItemOptionSet} obj Optional instance to populate.
     * @return {module:model/RestApiResultMenuItemOptionSet} The populated <code>RestApiResultMenuItemOptionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultMenuItemOptionSet();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = MenuItemOptionSet.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MenuItemOptionSet} Data
 */
RestApiResultMenuItemOptionSet.prototype['Data'] = undefined;






export default RestApiResultMenuItemOptionSet;

