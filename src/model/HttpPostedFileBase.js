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
import Stream from './Stream';

/**
 * The HttpPostedFileBase model module.
 * @module model/HttpPostedFileBase
 * @version 1.0.0
 */
class HttpPostedFileBase {
    /**
     * Constructs a new <code>HttpPostedFileBase</code>.
     * @alias module:model/HttpPostedFileBase
     */
    constructor() { 
        
        HttpPostedFileBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HttpPostedFileBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HttpPostedFileBase} obj Optional instance to populate.
     * @return {module:model/HttpPostedFileBase} The populated <code>HttpPostedFileBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpPostedFileBase();

            if (data.hasOwnProperty('ContentLength')) {
                obj['ContentLength'] = ApiClient.convertToType(data['ContentLength'], 'Number');
            }
            if (data.hasOwnProperty('ContentType')) {
                obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
            }
            if (data.hasOwnProperty('FileName')) {
                obj['FileName'] = ApiClient.convertToType(data['FileName'], 'String');
            }
            if (data.hasOwnProperty('InputStream')) {
                obj['InputStream'] = Stream.constructFromObject(data['InputStream']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ContentLength
 */
HttpPostedFileBase.prototype['ContentLength'] = undefined;

/**
 * @member {String} ContentType
 */
HttpPostedFileBase.prototype['ContentType'] = undefined;

/**
 * @member {String} FileName
 */
HttpPostedFileBase.prototype['FileName'] = undefined;

/**
 * @member {module:model/Stream} InputStream
 */
HttpPostedFileBase.prototype['InputStream'] = undefined;






export default HttpPostedFileBase;

