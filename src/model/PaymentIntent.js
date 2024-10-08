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
import LastPaymentError from './LastPaymentError';

/**
 * The PaymentIntent model module.
 * @module model/PaymentIntent
 * @version 1.0.0
 */
class PaymentIntent {
    /**
     * Constructs a new <code>PaymentIntent</code>.
     * Represents stripe PaymentIntent
     * @alias module:model/PaymentIntent
     */
    constructor() { 
        
        PaymentIntent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentIntent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentIntent} obj Optional instance to populate.
     * @return {module:model/PaymentIntent} The populated <code>PaymentIntent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentIntent();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
            }
            if (data.hasOwnProperty('LastPaymentError')) {
                obj['LastPaymentError'] = LastPaymentError.constructFromObject(data['LastPaymentError']);
            }
        }
        return obj;
    }


}

/**
 * Id of payment intent
 * @member {String} Id
 */
PaymentIntent.prototype['Id'] = undefined;

/**
 * An arbitrary string attached to the object. Often useful for displaying to users.
 * @member {String} Description
 */
PaymentIntent.prototype['Description'] = undefined;

/**
 * Three-letter <a href=\"https://www.iso.org/iso-4217-currency-codes.html\">ISO currency  code</a>, in lowercase. Must be a <a href=\"https://stripe.com/docs/currencies\">supported  currency</a>.
 * @member {String} Currency
 */
PaymentIntent.prototype['Currency'] = undefined;

/**
 * Status of this PaymentIntent, one of requires_payment_method,  requires_confirmation, requires_action, processing,  requires_capture, canceled, or succeeded. Read more about each  PaymentIntent <a href=\"https://stripe.com/docs/payments/intents#intent-statuses\">status</a>.  One of: canceled, processing, requires_action,  requires_capture, requires_confirmation, requires_payment_method,  or succeeded.
 * @member {String} Status
 */
PaymentIntent.prototype['Status'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Date} Created
 */
PaymentIntent.prototype['Created'] = undefined;

/**
 * @member {module:model/LastPaymentError} LastPaymentError
 */
PaymentIntent.prototype['LastPaymentError'] = undefined;






export default PaymentIntent;

