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
 * The PayoutReport3RefundedOrder model module.
 * @module model/PayoutReport3RefundedOrder
 * @version 1.0.0
 */
class PayoutReport3RefundedOrder {
    /**
     * Constructs a new <code>PayoutReport3RefundedOrder</code>.
     * @alias module:model/PayoutReport3RefundedOrder
     */
    constructor() { 
        
        PayoutReport3RefundedOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutReport3RefundedOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutReport3RefundedOrder} obj Optional instance to populate.
     * @return {module:model/PayoutReport3RefundedOrder} The populated <code>PayoutReport3RefundedOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutReport3RefundedOrder();

            if (data.hasOwnProperty('OrderId')) {
                obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'Number');
            }
            if (data.hasOwnProperty('PlacedAtTime')) {
                obj['PlacedAtTime'] = ApiClient.convertToType(data['PlacedAtTime'], 'Date');
            }
            if (data.hasOwnProperty('ModifiedAtTime')) {
                obj['ModifiedAtTime'] = ApiClient.convertToType(data['ModifiedAtTime'], 'Date');
            }
            if (data.hasOwnProperty('StoreName')) {
                obj['StoreName'] = ApiClient.convertToType(data['StoreName'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('RefundedAmount')) {
                obj['RefundedAmount'] = ApiClient.convertToType(data['RefundedAmount'], 'Number');
            }
            if (data.hasOwnProperty('RefundedFees')) {
                obj['RefundedFees'] = ApiClient.convertToType(data['RefundedFees'], 'Number');
            }
            if (data.hasOwnProperty('RefundType')) {
                obj['RefundType'] = ApiClient.convertToType(data['RefundType'], 'String');
            }
            if (data.hasOwnProperty('CashFeeRefundedToCustomer')) {
                obj['CashFeeRefundedToCustomer'] = ApiClient.convertToType(data['CashFeeRefundedToCustomer'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} OrderId
 */
PayoutReport3RefundedOrder.prototype['OrderId'] = undefined;

/**
 * @member {Date} PlacedAtTime
 */
PayoutReport3RefundedOrder.prototype['PlacedAtTime'] = undefined;

/**
 * @member {Date} ModifiedAtTime
 */
PayoutReport3RefundedOrder.prototype['ModifiedAtTime'] = undefined;

/**
 * @member {String} StoreName
 */
PayoutReport3RefundedOrder.prototype['StoreName'] = undefined;

/**
 * @member {module:model/PayoutReport3RefundedOrder.TypeEnum} Type
 */
PayoutReport3RefundedOrder.prototype['Type'] = undefined;

/**
 * @member {Number} RefundedAmount
 */
PayoutReport3RefundedOrder.prototype['RefundedAmount'] = undefined;

/**
 * @member {Number} RefundedFees
 */
PayoutReport3RefundedOrder.prototype['RefundedFees'] = undefined;

/**
 * @member {String} RefundType
 */
PayoutReport3RefundedOrder.prototype['RefundType'] = undefined;

/**
 * @member {Number} CashFeeRefundedToCustomer
 */
PayoutReport3RefundedOrder.prototype['CashFeeRefundedToCustomer'] = undefined;





/**
 * Allowed values for the <code>Type</code> property.
 * @enum {String}
 * @readonly
 */
PayoutReport3RefundedOrder['TypeEnum'] = {

    /**
     * value: "Cash"
     * @const
     */
    "Cash": "Cash",

    /**
     * value: "Card"
     * @const
     */
    "Card": "Card"
};



export default PayoutReport3RefundedOrder;

