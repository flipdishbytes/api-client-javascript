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
import ValidityPeriod from './ValidityPeriod';

/**
 * The UpdateVoucher model module.
 * @module model/UpdateVoucher
 * @version 1.0.0
 */
class UpdateVoucher {
    /**
     * Constructs a new <code>UpdateVoucher</code>.
     * Update Voucher
     * @alias module:model/UpdateVoucher
     */
    constructor() { 
        
        UpdateVoucher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateVoucher} obj Optional instance to populate.
     * @return {module:model/UpdateVoucher} The populated <code>UpdateVoucher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateVoucher();

            if (data.hasOwnProperty('PromotionId')) {
                obj['PromotionId'] = ApiClient.convertToType(data['PromotionId'], 'Number');
            }
            if (data.hasOwnProperty('PromotionName')) {
                obj['PromotionName'] = ApiClient.convertToType(data['PromotionName'], 'String');
            }
            if (data.hasOwnProperty('PromotionAwardMenuItemPublicIds')) {
                obj['PromotionAwardMenuItemPublicIds'] = ApiClient.convertToType(data['PromotionAwardMenuItemPublicIds'], ['String']);
            }
            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Stores')) {
                obj['Stores'] = ApiClient.convertToType(data['Stores'], ['Number']);
            }
            if (data.hasOwnProperty('ValidOnOrdersOver')) {
                obj['ValidOnOrdersOver'] = ApiClient.convertToType(data['ValidOnOrdersOver'], 'Number');
            }
            if (data.hasOwnProperty('TakesPriority')) {
                obj['TakesPriority'] = ApiClient.convertToType(data['TakesPriority'], 'Boolean');
            }
            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('IsAutomaticallyApplied')) {
                obj['IsAutomaticallyApplied'] = ApiClient.convertToType(data['IsAutomaticallyApplied'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludeDeliveryFee')) {
                obj['IncludeDeliveryFee'] = ApiClient.convertToType(data['IncludeDeliveryFee'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidForDeliveryOrders')) {
                obj['IsValidForDeliveryOrders'] = ApiClient.convertToType(data['IsValidForDeliveryOrders'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidForPickupOrders')) {
                obj['IsValidForPickupOrders'] = ApiClient.convertToType(data['IsValidForPickupOrders'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidForOrdersPayedOnline')) {
                obj['IsValidForOrdersPayedOnline'] = ApiClient.convertToType(data['IsValidForOrdersPayedOnline'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidForOrdersPayedByCash')) {
                obj['IsValidForOrdersPayedByCash'] = ApiClient.convertToType(data['IsValidForOrdersPayedByCash'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidForFirstOrderOnly')) {
                obj['IsValidForFirstOrderOnly'] = ApiClient.convertToType(data['IsValidForFirstOrderOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidOncePerCustomer')) {
                obj['IsValidOncePerCustomer'] = ApiClient.convertToType(data['IsValidOncePerCustomer'], 'Boolean');
            }
            if (data.hasOwnProperty('IsValidOnlyOnce')) {
                obj['IsValidOnlyOnce'] = ApiClient.convertToType(data['IsValidOnlyOnce'], 'Boolean');
            }
            if (data.hasOwnProperty('IsDiscoverable')) {
                obj['IsDiscoverable'] = ApiClient.convertToType(data['IsDiscoverable'], 'Boolean');
            }
            if (data.hasOwnProperty('ForceDiscount')) {
                obj['ForceDiscount'] = ApiClient.convertToType(data['ForceDiscount'], 'Boolean');
            }
            if (data.hasOwnProperty('StartDate')) {
                obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
            }
            if (data.hasOwnProperty('ExpiryDate')) {
                obj['ExpiryDate'] = ApiClient.convertToType(data['ExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('ChannelRestrictions')) {
                obj['ChannelRestrictions'] = ApiClient.convertToType(data['ChannelRestrictions'], ['String']);
            }
            if (data.hasOwnProperty('ValidityPeriods')) {
                obj['ValidityPeriods'] = ApiClient.convertToType(data['ValidityPeriods'], [ValidityPeriod]);
            }
            if (data.hasOwnProperty('VoucherSubType')) {
                obj['VoucherSubType'] = ApiClient.convertToType(data['VoucherSubType'], 'String');
            }
            if (data.hasOwnProperty('CustomerId')) {
                obj['CustomerId'] = ApiClient.convertToType(data['CustomerId'], 'Number');
            }
            if (data.hasOwnProperty('MaxRedemptions')) {
                obj['MaxRedemptions'] = ApiClient.convertToType(data['MaxRedemptions'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Promotion ID to update
 * @member {Number} PromotionId
 */
UpdateVoucher.prototype['PromotionId'] = undefined;

/**
 * The updated name of the promotion
 * @member {String} PromotionName
 */
UpdateVoucher.prototype['PromotionName'] = undefined;

/**
 * The updated menu items that the promotion awards
 * @member {Array.<String>} PromotionAwardMenuItemPublicIds
 */
UpdateVoucher.prototype['PromotionAwardMenuItemPublicIds'] = undefined;

/**
 * Voucher Code
 * @member {String} Code
 */
UpdateVoucher.prototype['Code'] = undefined;

/**
 * Voucher Description (Visible on printout)
 * @member {String} Description
 */
UpdateVoucher.prototype['Description'] = undefined;

/**
 * Stores that this voucher applies to
 * @member {Array.<Number>} Stores
 */
UpdateVoucher.prototype['Stores'] = undefined;

/**
 * Valid on orders on or above
 * @member {Number} ValidOnOrdersOver
 */
UpdateVoucher.prototype['ValidOnOrdersOver'] = undefined;

/**
 * Takes priority
 * @member {Boolean} TakesPriority
 */
UpdateVoucher.prototype['TakesPriority'] = undefined;

/**
 * Is voucher enabled
 * @member {Boolean} IsEnabled
 */
UpdateVoucher.prototype['IsEnabled'] = undefined;

/**
 * Is voucher automatically applied
 * @member {Boolean} IsAutomaticallyApplied
 */
UpdateVoucher.prototype['IsAutomaticallyApplied'] = undefined;

/**
 * Include delivery fees
 * @member {Boolean} IncludeDeliveryFee
 */
UpdateVoucher.prototype['IncludeDeliveryFee'] = undefined;

/**
 * Valid for delivery orders
 * @member {Boolean} IsValidForDeliveryOrders
 */
UpdateVoucher.prototype['IsValidForDeliveryOrders'] = undefined;

/**
 * Valid for pickup orders
 * @member {Boolean} IsValidForPickupOrders
 */
UpdateVoucher.prototype['IsValidForPickupOrders'] = undefined;

/**
 * Valid for orders payed online
 * @member {Boolean} IsValidForOrdersPayedOnline
 */
UpdateVoucher.prototype['IsValidForOrdersPayedOnline'] = undefined;

/**
 * Valid for orders payed in cash
 * @member {Boolean} IsValidForOrdersPayedByCash
 */
UpdateVoucher.prototype['IsValidForOrdersPayedByCash'] = undefined;

/**
 * Valid only on the first order by the customer
 * @member {Boolean} IsValidForFirstOrderOnly
 */
UpdateVoucher.prototype['IsValidForFirstOrderOnly'] = undefined;

/**
 * Valid once per customer
 * @member {Boolean} IsValidOncePerCustomer
 */
UpdateVoucher.prototype['IsValidOncePerCustomer'] = undefined;

/**
 * Valid only once, by any customer (once used cannot be used again by any other customer)
 * @member {Boolean} IsValidOnlyOnce
 */
UpdateVoucher.prototype['IsValidOnlyOnce'] = undefined;

/**
 * Enables the voucher to be offered in the Voucher Discoverability feature
 * @member {Boolean} IsDiscoverable
 */
UpdateVoucher.prototype['IsDiscoverable'] = undefined;

/**
 * Force the discount to be applied which bypasses some menu restrictions
 * @member {Boolean} ForceDiscount
 */
UpdateVoucher.prototype['ForceDiscount'] = undefined;

/**
 * Voucher Starts On (Time in UTC)
 * @member {Date} StartDate
 */
UpdateVoucher.prototype['StartDate'] = undefined;

/**
 * Voucher Expires On (Time in UTC)
 * @member {Date} ExpiryDate
 */
UpdateVoucher.prototype['ExpiryDate'] = undefined;

/**
 * Limit the channels this voucher can be used on
 * @member {Array.<module:model/UpdateVoucher.ChannelRestrictionsEnum>} ChannelRestrictions
 */
UpdateVoucher.prototype['ChannelRestrictions'] = undefined;

/**
 * Periods in which the voucher is valid.  An empty list means the voucher is valid at all times.  When updating the voucher, if this is set to null, the validity periods won't be updated.
 * @member {Array.<module:model/ValidityPeriod>} ValidityPeriods
 */
UpdateVoucher.prototype['ValidityPeriods'] = undefined;

/**
 * Voucher Subtype
 * @member {module:model/UpdateVoucher.VoucherSubTypeEnum} VoucherSubType
 */
UpdateVoucher.prototype['VoucherSubType'] = undefined;

/**
 * Customer UserID
 * @member {Number} CustomerId
 */
UpdateVoucher.prototype['CustomerId'] = undefined;

/**
 * Maximum number of times the voucher can be redeemed (used)
 * @member {Number} MaxRedemptions
 */
UpdateVoucher.prototype['MaxRedemptions'] = undefined;





/**
 * Allowed values for the <code>ChannelRestrictions</code> property.
 * @enum {String}
 * @readonly
 */
UpdateVoucher['ChannelRestrictionsEnum'] = {

    /**
     * value: "Ios"
     * @const
     */
    "Ios": "Ios",

    /**
     * value: "Android"
     * @const
     */
    "Android": "Android",

    /**
     * value: "Web"
     * @const
     */
    "Web": "Web",

    /**
     * value: "Kiosk"
     * @const
     */
    "Kiosk": "Kiosk",

    /**
     * value: "Pos"
     * @const
     */
    "Pos": "Pos",

    /**
     * value: "Google"
     * @const
     */
    "Google": "Google"
};


/**
 * Allowed values for the <code>VoucherSubType</code> property.
 * @enum {String}
 * @readonly
 */
UpdateVoucher['VoucherSubTypeEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "SignUp"
     * @const
     */
    "SignUp": "SignUp",

    /**
     * value: "Loyalty"
     * @const
     */
    "Loyalty": "Loyalty",

    /**
     * value: "Loyalty25"
     * @const
     */
    "Loyalty25": "Loyalty25",

    /**
     * value: "Retention"
     * @const
     */
    "Retention": "Retention",

    /**
     * value: "SecondaryRetention"
     * @const
     */
    "SecondaryRetention": "SecondaryRetention",

    /**
     * value: "Custom"
     * @const
     */
    "Custom": "Custom"
};



export default UpdateVoucher;

