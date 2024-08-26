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
 * The Setting model module.
 * @module model/Setting
 * @version 1.0.0
 */
class Setting {
    /**
     * Constructs a new <code>Setting</code>.
     * @alias module:model/Setting
     */
    constructor() { 
        
        Setting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Setting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Setting} obj Optional instance to populate.
     * @return {module:model/Setting} The populated <code>Setting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Setting();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Key
 */
Setting.prototype['Key'] = undefined;

/**
 * @member {String} Value
 */
Setting.prototype['Value'] = undefined;






export default Setting;

