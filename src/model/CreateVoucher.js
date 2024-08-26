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
import CreatePromotion from './CreatePromotion';
import CreditNoteDetails from './CreditNoteDetails';
import LumpDiscountDetails from './LumpDiscountDetails';
import PercentDiscountDetails from './PercentDiscountDetails';
import ValidityPeriod from './ValidityPeriod';

/**
 * The CreateVoucher model module.
 * @module model/CreateVoucher
 * @version 1.0.0
 */
class CreateVoucher {
    /**
     * Constructs a new <code>CreateVoucher</code>.
     * Create Voucher
     * @alias module:model/CreateVoucher
     */
    constructor() { 
        
        CreateVoucher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVoucher} obj Optional instance to populate.
     * @return {module:model/CreateVoucher} The populated <code>CreateVoucher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateVoucher();

            if (data.hasOwnProperty('VoucherType')) {
                obj['VoucherType'] = ApiClient.convertToType(data['VoucherType'], 'String');
            }
            if (data.hasOwnProperty('Promotion')) {
                obj['Promotion'] = CreatePromotion.constructFromObject(data['Promotion']);
            }
            if (data.hasOwnProperty('CreditNoteDetails')) {
                obj['CreditNoteDetails'] = CreditNoteDetails.constructFromObject(data['CreditNoteDetails']);
            }
            if (data.hasOwnProperty('LumpDiscountDetails')) {
                obj['LumpDiscountDetails'] = LumpDiscountDetails.constructFromObject(data['LumpDiscountDetails']);
            }
            if (data.hasOwnProperty('PercentDiscountDetails')) {
                obj['PercentDiscountDetails'] = PercentDiscountDetails.constructFromObject(data['PercentDiscountDetails']);
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
 * Voucher Type
 * @member {module:model/CreateVoucher.VoucherTypeEnum} VoucherType
 */
CreateVoucher.prototype['VoucherType'] = undefined;

/**
 * @member {module:model/CreatePromotion} Promotion
 */
CreateVoucher.prototype['Promotion'] = undefined;

/**
 * @member {module:model/CreditNoteDetails} CreditNoteDetails
 */
CreateVoucher.prototype['CreditNoteDetails'] = undefined;

/**
 * @member {module:model/LumpDiscountDetails} LumpDiscountDetails
 */
CreateVoucher.prototype['LumpDiscountDetails'] = undefined;

/**
 * @member {module:model/PercentDiscountDetails} PercentDiscountDetails
 */
CreateVoucher.prototype['PercentDiscountDetails'] = undefined;

/**
 * Voucher Code
 * @member {String} Code
 */
CreateVoucher.prototype['Code'] = undefined;

/**
 * Voucher Description (Visible on printout)
 * @member {String} Description
 */
CreateVoucher.prototype['Description'] = undefined;

/**
 * Stores that this voucher applies to
 * @member {Array.<Number>} Stores
 */
CreateVoucher.prototype['Stores'] = undefined;

/**
 * Valid on orders on or above
 * @member {Number} ValidOnOrdersOver
 */
CreateVoucher.prototype['ValidOnOrdersOver'] = undefined;

/**
 * Takes priority
 * @member {Boolean} TakesPriority
 */
CreateVoucher.prototype['TakesPriority'] = undefined;

/**
 * Is voucher enabled
 * @member {Boolean} IsEnabled
 */
CreateVoucher.prototype['IsEnabled'] = undefined;

/**
 * Is voucher automatically applied
 * @member {Boolean} IsAutomaticallyApplied
 */
CreateVoucher.prototype['IsAutomaticallyApplied'] = undefined;

/**
 * Include delivery fees
 * @member {Boolean} IncludeDeliveryFee
 */
CreateVoucher.prototype['IncludeDeliveryFee'] = undefined;

/**
 * Valid for delivery orders
 * @member {Boolean} IsValidForDeliveryOrders
 */
CreateVoucher.prototype['IsValidForDeliveryOrders'] = undefined;

/**
 * Valid for pickup orders
 * @member {Boolean} IsValidForPickupOrders
 */
CreateVoucher.prototype['IsValidForPickupOrders'] = undefined;

/**
 * Valid for orders payed online
 * @member {Boolean} IsValidForOrdersPayedOnline
 */
CreateVoucher.prototype['IsValidForOrdersPayedOnline'] = undefined;

/**
 * Valid for orders payed in cash
 * @member {Boolean} IsValidForOrdersPayedByCash
 */
CreateVoucher.prototype['IsValidForOrdersPayedByCash'] = undefined;

/**
 * Valid only on the first order by the customer
 * @member {Boolean} IsValidForFirstOrderOnly
 */
CreateVoucher.prototype['IsValidForFirstOrderOnly'] = undefined;

/**
 * Valid once per customer
 * @member {Boolean} IsValidOncePerCustomer
 */
CreateVoucher.prototype['IsValidOncePerCustomer'] = undefined;

/**
 * Valid only once, by any customer (once used cannot be used again by any other customer)
 * @member {Boolean} IsValidOnlyOnce
 */
CreateVoucher.prototype['IsValidOnlyOnce'] = undefined;

/**
 * Enables the voucher to be offered in the Voucher Discoverability feature
 * @member {Boolean} IsDiscoverable
 */
CreateVoucher.prototype['IsDiscoverable'] = undefined;

/**
 * Voucher Starts On (Time in UTC)
 * @member {Date} StartDate
 */
CreateVoucher.prototype['StartDate'] = undefined;

/**
 * Voucher Expires On (Time in UTC)
 * @member {Date} ExpiryDate
 */
CreateVoucher.prototype['ExpiryDate'] = undefined;

/**
 * Limit the channels this voucher can be used on
 * @member {Array.<module:model/CreateVoucher.ChannelRestrictionsEnum>} ChannelRestrictions
 */
CreateVoucher.prototype['ChannelRestrictions'] = undefined;

/**
 * Periods in which the voucher is valid.  An empty list means the voucher is valid at all times.  When updating the voucher, if this is set to null, the validity periods won't be updated.
 * @member {Array.<module:model/ValidityPeriod>} ValidityPeriods
 */
CreateVoucher.prototype['ValidityPeriods'] = undefined;

/**
 * Voucher Subtype
 * @member {module:model/CreateVoucher.VoucherSubTypeEnum} VoucherSubType
 */
CreateVoucher.prototype['VoucherSubType'] = undefined;

/**
 * Customer UserID
 * @member {Number} CustomerId
 */
CreateVoucher.prototype['CustomerId'] = undefined;

/**
 * Maximum number of times the voucher can be redeemed (used)
 * @member {Number} MaxRedemptions
 */
CreateVoucher.prototype['MaxRedemptions'] = undefined;





/**
 * Allowed values for the <code>VoucherType</code> property.
 * @enum {String}
 * @readonly
 */
CreateVoucher['VoucherTypeEnum'] = {

    /**
     * value: "PercentageDiscount"
     * @const
     */
    "PercentageDiscount": "PercentageDiscount",

    /**
     * value: "LumpDiscount"
     * @const
     */
    "LumpDiscount": "LumpDiscount",

    /**
     * value: "AddItem"
     * @const
     */
    "AddItem": "AddItem",

    /**
     * value: "CreditNote"
     * @const
     */
    "CreditNote": "CreditNote",

    /**
     * value: "FreeDelivery"
     * @const
     */
    "FreeDelivery": "FreeDelivery"
};


/**
 * Allowed values for the <code>ChannelRestrictions</code> property.
 * @enum {String}
 * @readonly
 */
CreateVoucher['ChannelRestrictionsEnum'] = {

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
CreateVoucher['VoucherSubTypeEnum'] = {

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



export default CreateVoucher;

