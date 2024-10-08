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
import OAuthApp from './OAuthApp';

/**
 * The RestApiResultOAuthApp model module.
 * @module model/RestApiResultOAuthApp
 * @version 1.0.0
 */
class RestApiResultOAuthApp {
    /**
     * Constructs a new <code>RestApiResultOAuthApp</code>.
     * Rest api result
     * @alias module:model/RestApiResultOAuthApp
     * @param Data {module:model/OAuthApp} 
     */
    constructor(Data) { 
        
        RestApiResultOAuthApp.initialize(this, Data);
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
     * Constructs a <code>RestApiResultOAuthApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultOAuthApp} obj Optional instance to populate.
     * @return {module:model/RestApiResultOAuthApp} The populated <code>RestApiResultOAuthApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultOAuthApp();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = OAuthApp.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OAuthApp} Data
 */
RestApiResultOAuthApp.prototype['Data'] = undefined;






export default RestApiResultOAuthApp;

