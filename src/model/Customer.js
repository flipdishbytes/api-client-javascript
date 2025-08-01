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
 * The Customer model module.
 * @module model/Customer
 * @version 1.0.0
 */
class Customer {
    /**
     * Constructs a new <code>Customer</code>.
     * Defines a customer
     * @alias module:model/Customer
     */
    constructor() { 
        
        Customer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customer();

            if (data.hasOwnProperty('CustomerId')) {
                obj['CustomerId'] = ApiClient.convertToType(data['CustomerId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('RegistrationDate')) {
                obj['RegistrationDate'] = ApiClient.convertToType(data['RegistrationDate'], 'Date');
            }
            if (data.hasOwnProperty('PhoneNumber')) {
                obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('CashOrdersEnabled')) {
                obj['CashOrdersEnabled'] = ApiClient.convertToType(data['CashOrdersEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('CardOrdersEnabled')) {
                obj['CardOrdersEnabled'] = ApiClient.convertToType(data['CardOrdersEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('MarketingEnabled')) {
                obj['MarketingEnabled'] = ApiClient.convertToType(data['MarketingEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Id of the customer
 * @member {Number} CustomerId
 */
Customer.prototype['CustomerId'] = undefined;

/**
 * Customer name
 * @member {String} Name
 */
Customer.prototype['Name'] = undefined;

/**
 * Customer registration date
 * @member {Date} RegistrationDate
 */
Customer.prototype['RegistrationDate'] = undefined;

/**
 * Phone Number in international format
 * @member {String} PhoneNumber
 */
Customer.prototype['PhoneNumber'] = undefined;

/**
 * Customer can place cash orders
 * @member {Boolean} CashOrdersEnabled
 */
Customer.prototype['CashOrdersEnabled'] = undefined;

/**
 * Customer can place card orders
 * @member {Boolean} CardOrdersEnabled
 */
Customer.prototype['CardOrdersEnabled'] = undefined;

/**
 * Customer can receive marketing
 * @member {Boolean} MarketingEnabled
 */
Customer.prototype['MarketingEnabled'] = undefined;






export default Customer;

