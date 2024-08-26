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
import PaymentTerminalTransactionDetails from './PaymentTerminalTransactionDetails';

/**
 * The RestApiResultPaymentTerminalTransactionDetails model module.
 * @module model/RestApiResultPaymentTerminalTransactionDetails
 * @version 1.0.0
 */
class RestApiResultPaymentTerminalTransactionDetails {
    /**
     * Constructs a new <code>RestApiResultPaymentTerminalTransactionDetails</code>.
     * Rest api result
     * @alias module:model/RestApiResultPaymentTerminalTransactionDetails
     * @param Data {module:model/PaymentTerminalTransactionDetails} 
     */
    constructor(Data) { 
        
        RestApiResultPaymentTerminalTransactionDetails.initialize(this, Data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Data) { 
        obj['Data'] = Data;
    }

    /**
     * Constructs a <code>RestApiResultPaymentTerminalTransactionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultPaymentTerminalTransactionDetails} obj Optional instance to populate.
     * @return {module:model/RestApiResultPaymentTerminalTransactionDetails} The populated <code>RestApiResultPaymentTerminalTransactionDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultPaymentTerminalTransactionDetails();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = PaymentTerminalTransactionDetails.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaymentTerminalTransactionDetails} Data
 */
RestApiResultPaymentTerminalTransactionDetails.prototype['Data'] = undefined;






export default RestApiResultPaymentTerminalTransactionDetails;

