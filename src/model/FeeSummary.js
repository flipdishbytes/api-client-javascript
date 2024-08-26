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
 * The FeeSummary model module.
 * @module model/FeeSummary
 * @version 1.0.0
 */
class FeeSummary {
    /**
     * Constructs a new <code>FeeSummary</code>.
     * Fee Summary
     * @alias module:model/FeeSummary
     */
    constructor() { 
        
        FeeSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeeSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeeSummary} obj Optional instance to populate.
     * @return {module:model/FeeSummary} The populated <code>FeeSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeSummary();

            if (data.hasOwnProperty('FeeAmount')) {
                obj['FeeAmount'] = ApiClient.convertToType(data['FeeAmount'], 'Number');
            }
            if (data.hasOwnProperty('PercentageRate')) {
                obj['PercentageRate'] = ApiClient.convertToType(data['PercentageRate'], 'Number');
            }
            if (data.hasOwnProperty('PerTransactionFee')) {
                obj['PerTransactionFee'] = ApiClient.convertToType(data['PerTransactionFee'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Fee amount
 * @member {Number} FeeAmount
 */
FeeSummary.prototype['FeeAmount'] = undefined;

/**
 * Percentage rate
 * @member {Number} PercentageRate
 */
FeeSummary.prototype['PercentageRate'] = undefined;

/**
 * Per transaction fee
 * @member {Number} PerTransactionFee
 */
FeeSummary.prototype['PerTransactionFee'] = undefined;






export default FeeSummary;

