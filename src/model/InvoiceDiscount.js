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
 * The InvoiceDiscount model module.
 * @module model/InvoiceDiscount
 * @version 1.0.0
 */
class InvoiceDiscount {
    /**
     * Constructs a new <code>InvoiceDiscount</code>.
     * Invoice Discount
     * @alias module:model/InvoiceDiscount
     * @param Name {String} Name
     * @param Amount {Number} Amount
     */
    constructor(Name, Amount) { 
        
        InvoiceDiscount.initialize(this, Name, Amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Name, Amount) { 
        obj['Name'] = Name;
        obj['Amount'] = Amount;
    }

    /**
     * Constructs a <code>InvoiceDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDiscount} obj Optional instance to populate.
     * @return {module:model/InvoiceDiscount} The populated <code>InvoiceDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDiscount();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Amount')) {
                obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} Name
 */
InvoiceDiscount.prototype['Name'] = undefined;

/**
 * Amount
 * @member {Number} Amount
 */
InvoiceDiscount.prototype['Amount'] = undefined;






export default InvoiceDiscount;

