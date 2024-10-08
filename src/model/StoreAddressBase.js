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
 * The StoreAddressBase model module.
 * @module model/StoreAddressBase
 * @version 1.0.0
 */
class StoreAddressBase {
    /**
     * Constructs a new <code>StoreAddressBase</code>.
     * Store address base
     * @alias module:model/StoreAddressBase
     */
    constructor() { 
        
        StoreAddressBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreAddressBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreAddressBase} obj Optional instance to populate.
     * @return {module:model/StoreAddressBase} The populated <code>StoreAddressBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreAddressBase();

            if (data.hasOwnProperty('Line1')) {
                obj['Line1'] = ApiClient.convertToType(data['Line1'], 'String');
            }
            if (data.hasOwnProperty('Postcode')) {
                obj['Postcode'] = ApiClient.convertToType(data['Postcode'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
            if (data.hasOwnProperty('DisplayForCustomer')) {
                obj['DisplayForCustomer'] = ApiClient.convertToType(data['DisplayForCustomer'], 'String');
            }
            if (data.hasOwnProperty('AddressFields')) {
                obj['AddressFields'] = ApiClient.convertToType(data['AddressFields'], {'String': Object});
            }
            if (data.hasOwnProperty('SingleLineDisplay')) {
                obj['SingleLineDisplay'] = ApiClient.convertToType(data['SingleLineDisplay'], 'String');
            }
            if (data.hasOwnProperty('TwoLinesDisplay')) {
                obj['TwoLinesDisplay'] = ApiClient.convertToType(data['TwoLinesDisplay'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Address line 1
 * @member {String} Line1
 */
StoreAddressBase.prototype['Line1'] = undefined;

/**
 * Postcode
 * @member {String} Postcode
 */
StoreAddressBase.prototype['Postcode'] = undefined;

/**
 * City
 * @member {String} City
 */
StoreAddressBase.prototype['City'] = undefined;

/**
 * Country code (ISO-alpha2)
 * @member {String} CountryCode
 */
StoreAddressBase.prototype['CountryCode'] = undefined;

/**
 * Display for customer
 * @member {String} DisplayForCustomer
 */
StoreAddressBase.prototype['DisplayForCustomer'] = undefined;

/**
 * Dyanmic field/value pairs, defined by the form assigned to the given country code.
 * @member {Object.<String, Object>} AddressFields
 */
StoreAddressBase.prototype['AddressFields'] = undefined;

/**
 * Single line display i18n, may be empty for not supported countries
 * @member {String} SingleLineDisplay
 */
StoreAddressBase.prototype['SingleLineDisplay'] = undefined;

/**
 * Two line display i18n, may be empty for not supported countries
 * @member {Array.<String>} TwoLinesDisplay
 */
StoreAddressBase.prototype['TwoLinesDisplay'] = undefined;






export default StoreAddressBase;

