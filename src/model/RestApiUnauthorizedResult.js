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
 * The RestApiUnauthorizedResult model module.
 * @module model/RestApiUnauthorizedResult
 * @version 1.0.0
 */
class RestApiUnauthorizedResult {
    /**
     * Constructs a new <code>RestApiUnauthorizedResult</code>.
     * Rest api unauthorized result
     * @alias module:model/RestApiUnauthorizedResult
     * @param Message {String} Message
     */
    constructor(Message) { 
        
        RestApiUnauthorizedResult.initialize(this, Message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Message) { 
        obj['Message'] = Message;
    }

    /**
     * Constructs a <code>RestApiUnauthorizedResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiUnauthorizedResult} obj Optional instance to populate.
     * @return {module:model/RestApiUnauthorizedResult} The populated <code>RestApiUnauthorizedResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiUnauthorizedResult();

            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Message
 * @member {String} Message
 */
RestApiUnauthorizedResult.prototype['Message'] = undefined;






export default RestApiUnauthorizedResult;

