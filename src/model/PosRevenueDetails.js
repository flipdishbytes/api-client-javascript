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
 * The PosRevenueDetails model module.
 * @module model/PosRevenueDetails
 * @version 1.0.0
 */
class PosRevenueDetails {
    /**
     * Constructs a new <code>PosRevenueDetails</code>.
     * Breakdown of POS charges
     * @alias module:model/PosRevenueDetails
     */
    constructor() { 
        
        PosRevenueDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PosRevenueDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PosRevenueDetails} obj Optional instance to populate.
     * @return {module:model/PosRevenueDetails} The populated <code>PosRevenueDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PosRevenueDetails();

            if (data.hasOwnProperty('PosSalesAmount')) {
                obj['PosSalesAmount'] = ApiClient.convertToType(data['PosSalesAmount'], 'Number');
            }
            if (data.hasOwnProperty('PosSalesTax')) {
                obj['PosSalesTax'] = ApiClient.convertToType(data['PosSalesTax'], 'Number');
            }
            if (data.hasOwnProperty('PosSalesTips')) {
                obj['PosSalesTips'] = ApiClient.convertToType(data['PosSalesTips'], 'Number');
            }
            if (data.hasOwnProperty('TotalPosRevenue')) {
                obj['TotalPosRevenue'] = ApiClient.convertToType(data['TotalPosRevenue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * POS sale amount for the store
 * @member {Number} PosSalesAmount
 */
PosRevenueDetails.prototype['PosSalesAmount'] = undefined;

/**
 * POS sale Tax for the store
 * @member {Number} PosSalesTax
 */
PosRevenueDetails.prototype['PosSalesTax'] = undefined;

/**
 * POS sale tips for the store
 * @member {Number} PosSalesTips
 */
PosRevenueDetails.prototype['PosSalesTips'] = undefined;

/**
 * POS Total Revenue for the store
 * @member {Number} TotalPosRevenue
 */
PosRevenueDetails.prototype['TotalPosRevenue'] = undefined;






export default PosRevenueDetails;

