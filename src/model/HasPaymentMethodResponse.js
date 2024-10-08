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
 * The HasPaymentMethodResponse model module.
 * @module model/HasPaymentMethodResponse
 * @version 1.0.0
 */
class HasPaymentMethodResponse {
    /**
     * Constructs a new <code>HasPaymentMethodResponse</code>.
     * Has Payment Method Response
     * @alias module:model/HasPaymentMethodResponse
     * @param HasPaymentMethod {Boolean} Has Payment Method
     */
    constructor(HasPaymentMethod) { 
        
        HasPaymentMethodResponse.initialize(this, HasPaymentMethod);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, HasPaymentMethod) { 
        obj['HasPaymentMethod'] = HasPaymentMethod;
    }

    /**
     * Constructs a <code>HasPaymentMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HasPaymentMethodResponse} obj Optional instance to populate.
     * @return {module:model/HasPaymentMethodResponse} The populated <code>HasPaymentMethodResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HasPaymentMethodResponse();

            if (data.hasOwnProperty('HasPaymentMethod')) {
                obj['HasPaymentMethod'] = ApiClient.convertToType(data['HasPaymentMethod'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Has Payment Method
 * @member {Boolean} HasPaymentMethod
 */
HasPaymentMethodResponse.prototype['HasPaymentMethod'] = undefined;






export default HasPaymentMethodResponse;

