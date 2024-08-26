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
import FulfillmentStatesConfigurationSummary from './FulfillmentStatesConfigurationSummary';

/**
 * The RestApiArrayResultFulfillmentStatesConfigurationSummary model module.
 * @module model/RestApiArrayResultFulfillmentStatesConfigurationSummary
 * @version 1.0.0
 */
class RestApiArrayResultFulfillmentStatesConfigurationSummary {
    /**
     * Constructs a new <code>RestApiArrayResultFulfillmentStatesConfigurationSummary</code>.
     * Rest api array result
     * @alias module:model/RestApiArrayResultFulfillmentStatesConfigurationSummary
     * @param Data {Array.<module:model/FulfillmentStatesConfigurationSummary>} Generic data object.
     */
    constructor(Data) { 
        
        RestApiArrayResultFulfillmentStatesConfigurationSummary.initialize(this, Data);
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
     * Constructs a <code>RestApiArrayResultFulfillmentStatesConfigurationSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiArrayResultFulfillmentStatesConfigurationSummary} obj Optional instance to populate.
     * @return {module:model/RestApiArrayResultFulfillmentStatesConfigurationSummary} The populated <code>RestApiArrayResultFulfillmentStatesConfigurationSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiArrayResultFulfillmentStatesConfigurationSummary();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [FulfillmentStatesConfigurationSummary]);
            }
        }
        return obj;
    }


}

/**
 * Generic data object.
 * @member {Array.<module:model/FulfillmentStatesConfigurationSummary>} Data
 */
RestApiArrayResultFulfillmentStatesConfigurationSummary.prototype['Data'] = undefined;






export default RestApiArrayResultFulfillmentStatesConfigurationSummary;

