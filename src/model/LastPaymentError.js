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
 * The LastPaymentError model module.
 * @module model/LastPaymentError
 * @version 1.0.0
 */
class LastPaymentError {
    /**
     * Constructs a new <code>LastPaymentError</code>.
     * List&#39;s the issues with the last failed payment intent
     * @alias module:model/LastPaymentError
     */
    constructor() { 
        
        LastPaymentError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LastPaymentError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastPaymentError} obj Optional instance to populate.
     * @return {module:model/LastPaymentError} The populated <code>LastPaymentError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LastPaymentError();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('DeclineCode')) {
                obj['DeclineCode'] = ApiClient.convertToType(data['DeclineCode'], 'String');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * For some errors that could be handled programmatically, a short string indicating the error code reported.
 * @member {String} Code
 */
LastPaymentError.prototype['Code'] = undefined;

/**
 * For card errors resulting from a card issuer decline, a short string indicating the card issuer’s reason for the decline if they provide one.
 * @member {String} DeclineCode
 */
LastPaymentError.prototype['DeclineCode'] = undefined;

/**
 * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
 * @member {String} Message
 */
LastPaymentError.prototype['Message'] = undefined;






export default LastPaymentError;

