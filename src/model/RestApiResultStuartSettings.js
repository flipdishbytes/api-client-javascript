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
import StuartSettings from './StuartSettings';

/**
 * The RestApiResultStuartSettings model module.
 * @module model/RestApiResultStuartSettings
 * @version 1.0.0
 */
class RestApiResultStuartSettings {
    /**
     * Constructs a new <code>RestApiResultStuartSettings</code>.
     * Rest api result
     * @alias module:model/RestApiResultStuartSettings
     * @param Data {module:model/StuartSettings} 
     */
    constructor(Data) { 
        
        RestApiResultStuartSettings.initialize(this, Data);
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
     * Constructs a <code>RestApiResultStuartSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultStuartSettings} obj Optional instance to populate.
     * @return {module:model/RestApiResultStuartSettings} The populated <code>RestApiResultStuartSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultStuartSettings();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = StuartSettings.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StuartSettings} Data
 */
RestApiResultStuartSettings.prototype['Data'] = undefined;






export default RestApiResultStuartSettings;

