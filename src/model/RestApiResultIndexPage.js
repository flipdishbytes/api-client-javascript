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
import IndexPage from './IndexPage';

/**
 * The RestApiResultIndexPage model module.
 * @module model/RestApiResultIndexPage
 * @version 1.0.0
 */
class RestApiResultIndexPage {
    /**
     * Constructs a new <code>RestApiResultIndexPage</code>.
     * Rest api result
     * @alias module:model/RestApiResultIndexPage
     * @param Data {module:model/IndexPage} 
     */
    constructor(Data) { 
        
        RestApiResultIndexPage.initialize(this, Data);
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
     * Constructs a <code>RestApiResultIndexPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultIndexPage} obj Optional instance to populate.
     * @return {module:model/RestApiResultIndexPage} The populated <code>RestApiResultIndexPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultIndexPage();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = IndexPage.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IndexPage} Data
 */
RestApiResultIndexPage.prototype['Data'] = undefined;






export default RestApiResultIndexPage;

