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
 * The ReaderActionStateInfo model module.
 * @module model/ReaderActionStateInfo
 * @version 1.0.0
 */
class ReaderActionStateInfo {
    /**
     * Constructs a new <code>ReaderActionStateInfo</code>.
     * Card reader state information
     * @alias module:model/ReaderActionStateInfo
     */
    constructor() { 
        
        ReaderActionStateInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReaderActionStateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReaderActionStateInfo} obj Optional instance to populate.
     * @return {module:model/ReaderActionStateInfo} The populated <code>ReaderActionStateInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReaderActionStateInfo();

            if (data.hasOwnProperty('ActionState')) {
                obj['ActionState'] = ApiClient.convertToType(data['ActionState'], 'String');
            }
            if (data.hasOwnProperty('FailureCode')) {
                obj['FailureCode'] = ApiClient.convertToType(data['FailureCode'], 'String');
            }
            if (data.hasOwnProperty('FailureMessage')) {
                obj['FailureMessage'] = ApiClient.convertToType(data['FailureMessage'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Action state
 * @member {String} ActionState
 */
ReaderActionStateInfo.prototype['ActionState'] = undefined;

/**
 * Failure code
 * @member {String} FailureCode
 */
ReaderActionStateInfo.prototype['FailureCode'] = undefined;

/**
 * Failure Message
 * @member {String} FailureMessage
 */
ReaderActionStateInfo.prototype['FailureMessage'] = undefined;

/**
 * Type
 * @member {String} Type
 */
ReaderActionStateInfo.prototype['Type'] = undefined;






export default ReaderActionStateInfo;

