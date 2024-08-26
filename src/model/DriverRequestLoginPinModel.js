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
 * The DriverRequestLoginPinModel model module.
 * @module model/DriverRequestLoginPinModel
 * @version 1.0.0
 */
class DriverRequestLoginPinModel {
    /**
     * Constructs a new <code>DriverRequestLoginPinModel</code>.
     * Driver Request Login Pin model
     * @alias module:model/DriverRequestLoginPinModel
     * @param PhoneNumber {String} Email address
     */
    constructor(PhoneNumber) { 
        
        DriverRequestLoginPinModel.initialize(this, PhoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, PhoneNumber) { 
        obj['PhoneNumber'] = PhoneNumber;
    }

    /**
     * Constructs a <code>DriverRequestLoginPinModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DriverRequestLoginPinModel} obj Optional instance to populate.
     * @return {module:model/DriverRequestLoginPinModel} The populated <code>DriverRequestLoginPinModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DriverRequestLoginPinModel();

            if (data.hasOwnProperty('PhoneNumber')) {
                obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email address
 * @member {String} PhoneNumber
 */
DriverRequestLoginPinModel.prototype['PhoneNumber'] = undefined;






export default DriverRequestLoginPinModel;

