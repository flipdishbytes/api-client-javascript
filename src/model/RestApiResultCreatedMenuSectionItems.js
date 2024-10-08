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
import CreatedMenuSectionItems from './CreatedMenuSectionItems';

/**
 * The RestApiResultCreatedMenuSectionItems model module.
 * @module model/RestApiResultCreatedMenuSectionItems
 * @version 1.0.0
 */
class RestApiResultCreatedMenuSectionItems {
    /**
     * Constructs a new <code>RestApiResultCreatedMenuSectionItems</code>.
     * Rest api result
     * @alias module:model/RestApiResultCreatedMenuSectionItems
     * @param Data {module:model/CreatedMenuSectionItems} 
     */
    constructor(Data) { 
        
        RestApiResultCreatedMenuSectionItems.initialize(this, Data);
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
     * Constructs a <code>RestApiResultCreatedMenuSectionItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultCreatedMenuSectionItems} obj Optional instance to populate.
     * @return {module:model/RestApiResultCreatedMenuSectionItems} The populated <code>RestApiResultCreatedMenuSectionItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultCreatedMenuSectionItems();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = CreatedMenuSectionItems.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreatedMenuSectionItems} Data
 */
RestApiResultCreatedMenuSectionItems.prototype['Data'] = undefined;






export default RestApiResultCreatedMenuSectionItems;

