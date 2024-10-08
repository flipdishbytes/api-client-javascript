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
import AppStoreApp from './AppStoreApp';

/**
 * The RestApiResultAppStoreApp model module.
 * @module model/RestApiResultAppStoreApp
 * @version 1.0.0
 */
class RestApiResultAppStoreApp {
    /**
     * Constructs a new <code>RestApiResultAppStoreApp</code>.
     * Rest api result
     * @alias module:model/RestApiResultAppStoreApp
     * @param Data {module:model/AppStoreApp} 
     */
    constructor(Data) { 
        
        RestApiResultAppStoreApp.initialize(this, Data);
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
     * Constructs a <code>RestApiResultAppStoreApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultAppStoreApp} obj Optional instance to populate.
     * @return {module:model/RestApiResultAppStoreApp} The populated <code>RestApiResultAppStoreApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultAppStoreApp();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = AppStoreApp.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AppStoreApp} Data
 */
RestApiResultAppStoreApp.prototype['Data'] = undefined;






export default RestApiResultAppStoreApp;

