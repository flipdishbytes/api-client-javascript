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
 * The StoreEndOfDayReport model module.
 * @module model/StoreEndOfDayReport
 * @version 1.0.0
 */
class StoreEndOfDayReport {
    /**
     * Constructs a new <code>StoreEndOfDayReport</code>.
     * Store end of day report
     * @alias module:model/StoreEndOfDayReport
     */
    constructor() { 
        
        StoreEndOfDayReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreEndOfDayReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreEndOfDayReport} obj Optional instance to populate.
     * @return {module:model/StoreEndOfDayReport} The populated <code>StoreEndOfDayReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreEndOfDayReport();

            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('StoreName')) {
                obj['StoreName'] = ApiClient.convertToType(data['StoreName'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('OrderCount')) {
                obj['OrderCount'] = ApiClient.convertToType(data['OrderCount'], 'Number');
            }
            if (data.hasOwnProperty('OrderValue')) {
                obj['OrderValue'] = ApiClient.convertToType(data['OrderValue'], 'Number');
            }
            if (data.hasOwnProperty('OrderValueExcludingDeliveryFees')) {
                obj['OrderValueExcludingDeliveryFees'] = ApiClient.convertToType(data['OrderValueExcludingDeliveryFees'], 'Number');
            }
            if (data.hasOwnProperty('CollectionOrderCount')) {
                obj['CollectionOrderCount'] = ApiClient.convertToType(data['CollectionOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('CollectionCashOrderCount')) {
                obj['CollectionCashOrderCount'] = ApiClient.convertToType(data['CollectionCashOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('CollectionPaidOnlineOrderCount')) {
                obj['CollectionPaidOnlineOrderCount'] = ApiClient.convertToType(data['CollectionPaidOnlineOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('CollectionOrderValue')) {
                obj['CollectionOrderValue'] = ApiClient.convertToType(data['CollectionOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('CollectionCashOrderValue')) {
                obj['CollectionCashOrderValue'] = ApiClient.convertToType(data['CollectionCashOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('CollectionPaidOnlineOrderValue')) {
                obj['CollectionPaidOnlineOrderValue'] = ApiClient.convertToType(data['CollectionPaidOnlineOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryOrderCount')) {
                obj['DeliveryOrderCount'] = ApiClient.convertToType(data['DeliveryOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryCashOrderCount')) {
                obj['DeliveryCashOrderCount'] = ApiClient.convertToType(data['DeliveryCashOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryPaidOnlineOrderCount')) {
                obj['DeliveryPaidOnlineOrderCount'] = ApiClient.convertToType(data['DeliveryPaidOnlineOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryOrderValue')) {
                obj['DeliveryOrderValue'] = ApiClient.convertToType(data['DeliveryOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryCashOrderValue')) {
                obj['DeliveryCashOrderValue'] = ApiClient.convertToType(data['DeliveryCashOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryPaidOnlineOrderValue')) {
                obj['DeliveryPaidOnlineOrderValue'] = ApiClient.convertToType(data['DeliveryPaidOnlineOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('PaidOnlineOrderCount')) {
                obj['PaidOnlineOrderCount'] = ApiClient.convertToType(data['PaidOnlineOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('CashOrderCount')) {
                obj['CashOrderCount'] = ApiClient.convertToType(data['CashOrderCount'], 'Number');
            }
            if (data.hasOwnProperty('PaidOnlineOrderValue')) {
                obj['PaidOnlineOrderValue'] = ApiClient.convertToType(data['PaidOnlineOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('CashOrderValue')) {
                obj['CashOrderValue'] = ApiClient.convertToType(data['CashOrderValue'], 'Number');
            }
            if (data.hasOwnProperty('PaidOnlineOrderValueExcludingDeliveryFees')) {
                obj['PaidOnlineOrderValueExcludingDeliveryFees'] = ApiClient.convertToType(data['PaidOnlineOrderValueExcludingDeliveryFees'], 'Number');
            }
            if (data.hasOwnProperty('CashOrderValueExcludingDeliveryFees')) {
                obj['CashOrderValueExcludingDeliveryFees'] = ApiClient.convertToType(data['CashOrderValueExcludingDeliveryFees'], 'Number');
            }
            if (data.hasOwnProperty('StartTime')) {
                obj['StartTime'] = ApiClient.convertToType(data['StartTime'], 'Date');
            }
            if (data.hasOwnProperty('EndTime')) {
                obj['EndTime'] = ApiClient.convertToType(data['EndTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Store Id
 * @member {Number} StoreId
 */
StoreEndOfDayReport.prototype['StoreId'] = undefined;

/**
 * Store name
 * @member {String} StoreName
 */
StoreEndOfDayReport.prototype['StoreName'] = undefined;

/**
 * Currency
 * @member {module:model/StoreEndOfDayReport.CurrencyEnum} Currency
 */
StoreEndOfDayReport.prototype['Currency'] = undefined;

/**
 * Order Count
 * @member {Number} OrderCount
 */
StoreEndOfDayReport.prototype['OrderCount'] = undefined;

/**
 * Order Value
 * @member {Number} OrderValue
 */
StoreEndOfDayReport.prototype['OrderValue'] = undefined;

/**
 * Order Value Excluding Delivery Fees
 * @member {Number} OrderValueExcludingDeliveryFees
 */
StoreEndOfDayReport.prototype['OrderValueExcludingDeliveryFees'] = undefined;

/**
 * Collection Order Count
 * @member {Number} CollectionOrderCount
 */
StoreEndOfDayReport.prototype['CollectionOrderCount'] = undefined;

/**
 * Collection Cash Order Count
 * @member {Number} CollectionCashOrderCount
 */
StoreEndOfDayReport.prototype['CollectionCashOrderCount'] = undefined;

/**
 * Collection Paid Online Order Count
 * @member {Number} CollectionPaidOnlineOrderCount
 */
StoreEndOfDayReport.prototype['CollectionPaidOnlineOrderCount'] = undefined;

/**
 * Collection Order Value
 * @member {Number} CollectionOrderValue
 */
StoreEndOfDayReport.prototype['CollectionOrderValue'] = undefined;

/**
 * Collection Cash Order Value
 * @member {Number} CollectionCashOrderValue
 */
StoreEndOfDayReport.prototype['CollectionCashOrderValue'] = undefined;

/**
 * Collection Paid Online Order Value
 * @member {Number} CollectionPaidOnlineOrderValue
 */
StoreEndOfDayReport.prototype['CollectionPaidOnlineOrderValue'] = undefined;

/**
 * Delivery Order Count
 * @member {Number} DeliveryOrderCount
 */
StoreEndOfDayReport.prototype['DeliveryOrderCount'] = undefined;

/**
 * Delivery Cash Order Count
 * @member {Number} DeliveryCashOrderCount
 */
StoreEndOfDayReport.prototype['DeliveryCashOrderCount'] = undefined;

/**
 * Delivery Paid Online Order Count
 * @member {Number} DeliveryPaidOnlineOrderCount
 */
StoreEndOfDayReport.prototype['DeliveryPaidOnlineOrderCount'] = undefined;

/**
 * Delivery Order Value
 * @member {Number} DeliveryOrderValue
 */
StoreEndOfDayReport.prototype['DeliveryOrderValue'] = undefined;

/**
 * Delivery Cash Order Value
 * @member {Number} DeliveryCashOrderValue
 */
StoreEndOfDayReport.prototype['DeliveryCashOrderValue'] = undefined;

/**
 * Delivery Paid Online Order Value
 * @member {Number} DeliveryPaidOnlineOrderValue
 */
StoreEndOfDayReport.prototype['DeliveryPaidOnlineOrderValue'] = undefined;

/**
 * Paid Online Order Count
 * @member {Number} PaidOnlineOrderCount
 */
StoreEndOfDayReport.prototype['PaidOnlineOrderCount'] = undefined;

/**
 * Cash Order Count
 * @member {Number} CashOrderCount
 */
StoreEndOfDayReport.prototype['CashOrderCount'] = undefined;

/**
 * Paid Online Order Value
 * @member {Number} PaidOnlineOrderValue
 */
StoreEndOfDayReport.prototype['PaidOnlineOrderValue'] = undefined;

/**
 * Cash Order Value
 * @member {Number} CashOrderValue
 */
StoreEndOfDayReport.prototype['CashOrderValue'] = undefined;

/**
 * Paid Online Order Value Excluding Delivery Fees
 * @member {Number} PaidOnlineOrderValueExcludingDeliveryFees
 */
StoreEndOfDayReport.prototype['PaidOnlineOrderValueExcludingDeliveryFees'] = undefined;

/**
 * Cash Order Value Excluding Delivery Fees
 * @member {Number} CashOrderValueExcludingDeliveryFees
 */
StoreEndOfDayReport.prototype['CashOrderValueExcludingDeliveryFees'] = undefined;

/**
 * Start Time
 * @member {Date} StartTime
 */
StoreEndOfDayReport.prototype['StartTime'] = undefined;

/**
 * End Time
 * @member {Date} EndTime
 */
StoreEndOfDayReport.prototype['EndTime'] = undefined;





/**
 * Allowed values for the <code>Currency</code> property.
 * @enum {String}
 * @readonly
 */
StoreEndOfDayReport['CurrencyEnum'] = {

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "GBP"
     * @const
     */
    "GBP": "GBP",

    /**
     * value: "CAD"
     * @const
     */
    "CAD": "CAD",

    /**
     * value: "AUD"
     * @const
     */
    "AUD": "AUD",

    /**
     * value: "DJF"
     * @const
     */
    "DJF": "DJF",

    /**
     * value: "ZAR"
     * @const
     */
    "ZAR": "ZAR",

    /**
     * value: "ETB"
     * @const
     */
    "ETB": "ETB",

    /**
     * value: "AED"
     * @const
     */
    "AED": "AED",

    /**
     * value: "BHD"
     * @const
     */
    "BHD": "BHD",

    /**
     * value: "DZD"
     * @const
     */
    "DZD": "DZD",

    /**
     * value: "EGP"
     * @const
     */
    "EGP": "EGP",

    /**
     * value: "IQD"
     * @const
     */
    "IQD": "IQD",

    /**
     * value: "JOD"
     * @const
     */
    "JOD": "JOD",

    /**
     * value: "KWD"
     * @const
     */
    "KWD": "KWD",

    /**
     * value: "LBP"
     * @const
     */
    "LBP": "LBP",

    /**
     * value: "LYD"
     * @const
     */
    "LYD": "LYD",

    /**
     * value: "MAD"
     * @const
     */
    "MAD": "MAD",

    /**
     * value: "OMR"
     * @const
     */
    "OMR": "OMR",

    /**
     * value: "QAR"
     * @const
     */
    "QAR": "QAR",

    /**
     * value: "SAR"
     * @const
     */
    "SAR": "SAR",

    /**
     * value: "SYP"
     * @const
     */
    "SYP": "SYP",

    /**
     * value: "TND"
     * @const
     */
    "TND": "TND",

    /**
     * value: "YER"
     * @const
     */
    "YER": "YER",

    /**
     * value: "CLP"
     * @const
     */
    "CLP": "CLP",

    /**
     * value: "INR"
     * @const
     */
    "INR": "INR",

    /**
     * value: "AZN"
     * @const
     */
    "AZN": "AZN",

    /**
     * value: "RUB"
     * @const
     */
    "RUB": "RUB",

    /**
     * value: "BYN"
     * @const
     */
    "BYN": "BYN",

    /**
     * value: "BGN"
     * @const
     */
    "BGN": "BGN",

    /**
     * value: "NGN"
     * @const
     */
    "NGN": "NGN",

    /**
     * value: "BDT"
     * @const
     */
    "BDT": "BDT",

    /**
     * value: "CNY"
     * @const
     */
    "CNY": "CNY",

    /**
     * value: "BAM"
     * @const
     */
    "BAM": "BAM",

    /**
     * value: "CZK"
     * @const
     */
    "CZK": "CZK",

    /**
     * value: "DKK"
     * @const
     */
    "DKK": "DKK",

    /**
     * value: "CHF"
     * @const
     */
    "CHF": "CHF",

    /**
     * value: "MVR"
     * @const
     */
    "MVR": "MVR",

    /**
     * value: "BTN"
     * @const
     */
    "BTN": "BTN",

    /**
     * value: "XCD"
     * @const
     */
    "XCD": "XCD",

    /**
     * value: "BZD"
     * @const
     */
    "BZD": "BZD",

    /**
     * value: "HKD"
     * @const
     */
    "HKD": "HKD",

    /**
     * value: "IDR"
     * @const
     */
    "IDR": "IDR",

    /**
     * value: "JMD"
     * @const
     */
    "JMD": "JMD",

    /**
     * value: "MYR"
     * @const
     */
    "MYR": "MYR",

    /**
     * value: "NZD"
     * @const
     */
    "NZD": "NZD",

    /**
     * value: "PHP"
     * @const
     */
    "PHP": "PHP",

    /**
     * value: "SGD"
     * @const
     */
    "SGD": "SGD",

    /**
     * value: "TTD"
     * @const
     */
    "TTD": "TTD",

    /**
     * value: "XDR"
     * @const
     */
    "XDR": "XDR",

    /**
     * value: "ARS"
     * @const
     */
    "ARS": "ARS",

    /**
     * value: "BOB"
     * @const
     */
    "BOB": "BOB",

    /**
     * value: "COP"
     * @const
     */
    "COP": "COP",

    /**
     * value: "CRC"
     * @const
     */
    "CRC": "CRC",

    /**
     * value: "CUP"
     * @const
     */
    "CUP": "CUP",

    /**
     * value: "DOP"
     * @const
     */
    "DOP": "DOP",

    /**
     * value: "GTQ"
     * @const
     */
    "GTQ": "GTQ",

    /**
     * value: "HNL"
     * @const
     */
    "HNL": "HNL",

    /**
     * value: "MXN"
     * @const
     */
    "MXN": "MXN",

    /**
     * value: "NIO"
     * @const
     */
    "NIO": "NIO",

    /**
     * value: "PAB"
     * @const
     */
    "PAB": "PAB",

    /**
     * value: "PEN"
     * @const
     */
    "PEN": "PEN",

    /**
     * value: "PYG"
     * @const
     */
    "PYG": "PYG",

    /**
     * value: "UYU"
     * @const
     */
    "UYU": "UYU",

    /**
     * value: "VEF"
     * @const
     */
    "VEF": "VEF",

    /**
     * value: "IRR"
     * @const
     */
    "IRR": "IRR",

    /**
     * value: "XOF"
     * @const
     */
    "XOF": "XOF",

    /**
     * value: "CDF"
     * @const
     */
    "CDF": "CDF",

    /**
     * value: "XAF"
     * @const
     */
    "XAF": "XAF",

    /**
     * value: "HTG"
     * @const
     */
    "HTG": "HTG",

    /**
     * value: "ILS"
     * @const
     */
    "ILS": "ILS",

    /**
     * value: "HRK"
     * @const
     */
    "HRK": "HRK",

    /**
     * value: "HUF"
     * @const
     */
    "HUF": "HUF",

    /**
     * value: "AMD"
     * @const
     */
    "AMD": "AMD",

    /**
     * value: "ISK"
     * @const
     */
    "ISK": "ISK",

    /**
     * value: "JPY"
     * @const
     */
    "JPY": "JPY",

    /**
     * value: "GEL"
     * @const
     */
    "GEL": "GEL",

    /**
     * value: "KZT"
     * @const
     */
    "KZT": "KZT",

    /**
     * value: "KHR"
     * @const
     */
    "KHR": "KHR",

    /**
     * value: "KRW"
     * @const
     */
    "KRW": "KRW",

    /**
     * value: "KGS"
     * @const
     */
    "KGS": "KGS",

    /**
     * value: "LAK"
     * @const
     */
    "LAK": "LAK",

    /**
     * value: "MKD"
     * @const
     */
    "MKD": "MKD",

    /**
     * value: "MNT"
     * @const
     */
    "MNT": "MNT",

    /**
     * value: "BND"
     * @const
     */
    "BND": "BND",

    /**
     * value: "MMK"
     * @const
     */
    "MMK": "MMK",

    /**
     * value: "NOK"
     * @const
     */
    "NOK": "NOK",

    /**
     * value: "NPR"
     * @const
     */
    "NPR": "NPR",

    /**
     * value: "PKR"
     * @const
     */
    "PKR": "PKR",

    /**
     * value: "PLN"
     * @const
     */
    "PLN": "PLN",

    /**
     * value: "AFN"
     * @const
     */
    "AFN": "AFN",

    /**
     * value: "BRL"
     * @const
     */
    "BRL": "BRL",

    /**
     * value: "MDL"
     * @const
     */
    "MDL": "MDL",

    /**
     * value: "RON"
     * @const
     */
    "RON": "RON",

    /**
     * value: "RWF"
     * @const
     */
    "RWF": "RWF",

    /**
     * value: "SEK"
     * @const
     */
    "SEK": "SEK",

    /**
     * value: "LKR"
     * @const
     */
    "LKR": "LKR",

    /**
     * value: "SOS"
     * @const
     */
    "SOS": "SOS",

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",

    /**
     * value: "RSD"
     * @const
     */
    "RSD": "RSD",

    /**
     * value: "KES"
     * @const
     */
    "KES": "KES",

    /**
     * value: "TJS"
     * @const
     */
    "TJS": "TJS",

    /**
     * value: "THB"
     * @const
     */
    "THB": "THB",

    /**
     * value: "ERN"
     * @const
     */
    "ERN": "ERN",

    /**
     * value: "TMT"
     * @const
     */
    "TMT": "TMT",

    /**
     * value: "BWP"
     * @const
     */
    "BWP": "BWP",

    /**
     * value: "TRY"
     * @const
     */
    "TRY": "TRY",

    /**
     * value: "UAH"
     * @const
     */
    "UAH": "UAH",

    /**
     * value: "UZS"
     * @const
     */
    "UZS": "UZS",

    /**
     * value: "VND"
     * @const
     */
    "VND": "VND",

    /**
     * value: "MOP"
     * @const
     */
    "MOP": "MOP",

    /**
     * value: "TWD"
     * @const
     */
    "TWD": "TWD",

    /**
     * value: "BMD"
     * @const
     */
    "BMD": "BMD"
};



export default StoreEndOfDayReport;

