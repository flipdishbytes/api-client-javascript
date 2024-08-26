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
 * The SafeWaitHandle model module.
 * @module model/SafeWaitHandle
 * @version 1.0.0
 */
class SafeWaitHandle {
    /**
     * Constructs a new <code>SafeWaitHandle</code>.
     * @alias module:model/SafeWaitHandle
     */
    constructor() { 
        
        SafeWaitHandle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SafeWaitHandle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SafeWaitHandle} obj Optional instance to populate.
     * @return {module:model/SafeWaitHandle} The populated <code>SafeWaitHandle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SafeWaitHandle();

            if (data.hasOwnProperty('IsInvalid')) {
                obj['IsInvalid'] = ApiClient.convertToType(data['IsInvalid'], 'Boolean');
            }
            if (data.hasOwnProperty('IsClosed')) {
                obj['IsClosed'] = ApiClient.convertToType(data['IsClosed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} IsInvalid
 */
SafeWaitHandle.prototype['IsInvalid'] = undefined;

/**
 * @member {Boolean} IsClosed
 */
SafeWaitHandle.prototype['IsClosed'] = undefined;






export default SafeWaitHandle;

