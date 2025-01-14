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
 * The Invoice model module.
 * @module model/Invoice
 * @version 1.0.0
 */
class Invoice {
    /**
     * Constructs a new <code>Invoice</code>.
     * Represents an ordering invoice for a period of time.
     * @alias module:model/Invoice
     */
    constructor() { 
        
        Invoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoice} obj Optional instance to populate.
     * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invoice();

            if (data.hasOwnProperty('InvoiceNumber')) {
                obj['InvoiceNumber'] = ApiClient.convertToType(data['InvoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('StartDay')) {
                obj['StartDay'] = ApiClient.convertToType(data['StartDay'], 'Date');
            }
            if (data.hasOwnProperty('EndDay')) {
                obj['EndDay'] = ApiClient.convertToType(data['EndDay'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Invoice Number
 * @member {String} InvoiceNumber
 */
Invoice.prototype['InvoiceNumber'] = undefined;

/**
 * The start day of the invoice period.
 * @member {Date} StartDay
 */
Invoice.prototype['StartDay'] = undefined;

/**
 * The end day of the invoice period.
 * @member {Date} EndDay
 */
Invoice.prototype['EndDay'] = undefined;






export default Invoice;

