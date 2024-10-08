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
 * The JobPricing model module.
 * @module model/JobPricing
 * @version 1.0.0
 */
class JobPricing {
    /**
     * Constructs a new <code>JobPricing</code>.
     * Job Pricing
     * @alias module:model/JobPricing
     */
    constructor() { 
        
        JobPricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobPricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobPricing} obj Optional instance to populate.
     * @return {module:model/JobPricing} The populated <code>JobPricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobPricing();

            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('TaxPercentage')) {
                obj['TaxPercentage'] = ApiClient.convertToType(data['TaxPercentage'], 'Number');
            }
            if (data.hasOwnProperty('PriceTaxIncluded')) {
                obj['PriceTaxIncluded'] = ApiClient.convertToType(data['PriceTaxIncluded'], 'Number');
            }
            if (data.hasOwnProperty('PriceTaxExcluded')) {
                obj['PriceTaxExcluded'] = ApiClient.convertToType(data['PriceTaxExcluded'], 'Number');
            }
            if (data.hasOwnProperty('TaxAmount')) {
                obj['TaxAmount'] = ApiClient.convertToType(data['TaxAmount'], 'Number');
            }
            if (data.hasOwnProperty('InvoiceUrl')) {
                obj['InvoiceUrl'] = ApiClient.convertToType(data['InvoiceUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Currency
 * @member {String} Currency
 */
JobPricing.prototype['Currency'] = undefined;

/**
 * Tax Percentage
 * @member {Number} TaxPercentage
 */
JobPricing.prototype['TaxPercentage'] = undefined;

/**
 * Price Tax Included
 * @member {Number} PriceTaxIncluded
 */
JobPricing.prototype['PriceTaxIncluded'] = undefined;

/**
 * Price Tax Excluded
 * @member {Number} PriceTaxExcluded
 */
JobPricing.prototype['PriceTaxExcluded'] = undefined;

/**
 * Tax Amount
 * @member {Number} TaxAmount
 */
JobPricing.prototype['TaxAmount'] = undefined;

/**
 * Invoice Url
 * @member {String} InvoiceUrl
 */
JobPricing.prototype['InvoiceUrl'] = undefined;






export default JobPricing;

