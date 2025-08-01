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
 * The CustomerSummary model module.
 * @module model/CustomerSummary
 * @version 1.0.0
 */
class CustomerSummary {
    /**
     * Constructs a new <code>CustomerSummary</code>.
     * Customer summary
     * @alias module:model/CustomerSummary
     */
    constructor() { 
        
        CustomerSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSummary} obj Optional instance to populate.
     * @return {module:model/CustomerSummary} The populated <code>CustomerSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerSummary();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('PhoneNumberLocalFormat')) {
                obj['PhoneNumberLocalFormat'] = ApiClient.convertToType(data['PhoneNumberLocalFormat'], 'String');
            }
            if (data.hasOwnProperty('PhoneNumber')) {
                obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('LanguagePreference')) {
                obj['LanguagePreference'] = ApiClient.convertToType(data['LanguagePreference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Customer identifier
 * @member {Number} Id
 */
CustomerSummary.prototype['Id'] = undefined;

/**
 * Customer name
 * @member {String} Name
 */
CustomerSummary.prototype['Name'] = undefined;

/**
 * Customer email address
 * @member {String} EmailAddress
 */
CustomerSummary.prototype['EmailAddress'] = undefined;

/**
 * Customer local phone number
 * @member {String} PhoneNumberLocalFormat
 */
CustomerSummary.prototype['PhoneNumberLocalFormat'] = undefined;

/**
 * Customer phone number
 * @member {String} PhoneNumber
 */
CustomerSummary.prototype['PhoneNumber'] = undefined;

/**
 * Preferred language of the consumer
 * @member {String} LanguagePreference
 */
CustomerSummary.prototype['LanguagePreference'] = undefined;






export default CustomerSummary;

