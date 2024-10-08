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
 * The ExecuteConfigurationActionRequest model module.
 * @module model/ExecuteConfigurationActionRequest
 * @version 1.0.0
 */
class ExecuteConfigurationActionRequest {
    /**
     * Constructs a new <code>ExecuteConfigurationActionRequest</code>.
     * @alias module:model/ExecuteConfigurationActionRequest
     */
    constructor() { 
        
        ExecuteConfigurationActionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteConfigurationActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteConfigurationActionRequest} obj Optional instance to populate.
     * @return {module:model/ExecuteConfigurationActionRequest} The populated <code>ExecuteConfigurationActionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteConfigurationActionRequest();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Action')) {
                obj['Action'] = ApiClient.convertToType(data['Action'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Key
 */
ExecuteConfigurationActionRequest.prototype['Key'] = undefined;

/**
 * @member {String} Action
 */
ExecuteConfigurationActionRequest.prototype['Action'] = undefined;






export default ExecuteConfigurationActionRequest;

