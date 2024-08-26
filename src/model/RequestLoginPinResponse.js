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
 * The RequestLoginPinResponse model module.
 * @module model/RequestLoginPinResponse
 * @version 1.0.0
 */
class RequestLoginPinResponse {
    /**
     * Constructs a new <code>RequestLoginPinResponse</code>.
     * Request login PIN response
     * @alias module:model/RequestLoginPinResponse
     */
    constructor() { 
        
        RequestLoginPinResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestLoginPinResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestLoginPinResponse} obj Optional instance to populate.
     * @return {module:model/RequestLoginPinResponse} The populated <code>RequestLoginPinResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestLoginPinResponse();

            if (data.hasOwnProperty('LoginPinSentViaEmail')) {
                obj['LoginPinSentViaEmail'] = ApiClient.convertToType(data['LoginPinSentViaEmail'], 'Boolean');
            }
            if (data.hasOwnProperty('ForceOktaLogin')) {
                obj['ForceOktaLogin'] = ApiClient.convertToType(data['ForceOktaLogin'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Login PIN sent via email to user
 * @member {Boolean} LoginPinSentViaEmail
 */
RequestLoginPinResponse.prototype['LoginPinSentViaEmail'] = undefined;

/**
 * All flipdishers must login via Okta
 * @member {Boolean} ForceOktaLogin
 */
RequestLoginPinResponse.prototype['ForceOktaLogin'] = undefined;






export default RequestLoginPinResponse;

