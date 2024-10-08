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
 * The JobCancellation model module.
 * @module model/JobCancellation
 * @version 1.0.0
 */
class JobCancellation {
    /**
     * Constructs a new <code>JobCancellation</code>.
     * Job Cancellation
     * @alias module:model/JobCancellation
     */
    constructor() { 
        
        JobCancellation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobCancellation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobCancellation} obj Optional instance to populate.
     * @return {module:model/JobCancellation} The populated <code>JobCancellation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobCancellation();

            if (data.hasOwnProperty('CanceledBy')) {
                obj['CanceledBy'] = ApiClient.convertToType(data['CanceledBy'], 'String');
            }
            if (data.hasOwnProperty('ReasonKey')) {
                obj['ReasonKey'] = ApiClient.convertToType(data['ReasonKey'], 'String');
            }
            if (data.hasOwnProperty('Comment')) {
                obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Canceled By
 * @member {String} CanceledBy
 */
JobCancellation.prototype['CanceledBy'] = undefined;

/**
 * Reason Key
 * @member {String} ReasonKey
 */
JobCancellation.prototype['ReasonKey'] = undefined;

/**
 * Comment
 * @member {String} Comment
 */
JobCancellation.prototype['Comment'] = undefined;






export default JobCancellation;

