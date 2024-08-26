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
 * The StoreNote model module.
 * @module model/StoreNote
 * @version 1.0.0
 */
class StoreNote {
    /**
     * Constructs a new <code>StoreNote</code>.
     * Store note
     * @alias module:model/StoreNote
     */
    constructor() { 
        
        StoreNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreNote} obj Optional instance to populate.
     * @return {module:model/StoreNote} The populated <code>StoreNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreNote();

            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('CreateTime')) {
                obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
            }
            if (data.hasOwnProperty('Note')) {
                obj['Note'] = ApiClient.convertToType(data['Note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * User identifier
 * @member {Number} UserId
 */
StoreNote.prototype['UserId'] = undefined;

/**
 * Create time
 * @member {Date} CreateTime
 */
StoreNote.prototype['CreateTime'] = undefined;

/**
 * Note
 * @member {String} Note
 */
StoreNote.prototype['Note'] = undefined;






export default StoreNote;

