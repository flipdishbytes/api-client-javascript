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
import MenuSection from './MenuSection';

/**
 * The RestApiResultMenuSection model module.
 * @module model/RestApiResultMenuSection
 * @version 1.0.0
 */
class RestApiResultMenuSection {
    /**
     * Constructs a new <code>RestApiResultMenuSection</code>.
     * Rest api result
     * @alias module:model/RestApiResultMenuSection
     * @param Data {module:model/MenuSection} 
     */
    constructor(Data) { 
        
        RestApiResultMenuSection.initialize(this, Data);
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
     * Constructs a <code>RestApiResultMenuSection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultMenuSection} obj Optional instance to populate.
     * @return {module:model/RestApiResultMenuSection} The populated <code>RestApiResultMenuSection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultMenuSection();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = MenuSection.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MenuSection} Data
 */
RestApiResultMenuSection.prototype['Data'] = undefined;






export default RestApiResultMenuSection;

