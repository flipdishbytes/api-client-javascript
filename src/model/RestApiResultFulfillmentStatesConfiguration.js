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
import FulfillmentStatesConfiguration from './FulfillmentStatesConfiguration';

/**
 * The RestApiResultFulfillmentStatesConfiguration model module.
 * @module model/RestApiResultFulfillmentStatesConfiguration
 * @version 1.0.0
 */
class RestApiResultFulfillmentStatesConfiguration {
    /**
     * Constructs a new <code>RestApiResultFulfillmentStatesConfiguration</code>.
     * Rest api result
     * @alias module:model/RestApiResultFulfillmentStatesConfiguration
     * @param Data {module:model/FulfillmentStatesConfiguration} 
     */
    constructor(Data) { 
        
        RestApiResultFulfillmentStatesConfiguration.initialize(this, Data);
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
     * Constructs a <code>RestApiResultFulfillmentStatesConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultFulfillmentStatesConfiguration} obj Optional instance to populate.
     * @return {module:model/RestApiResultFulfillmentStatesConfiguration} The populated <code>RestApiResultFulfillmentStatesConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultFulfillmentStatesConfiguration();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = FulfillmentStatesConfiguration.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FulfillmentStatesConfiguration} Data
 */
RestApiResultFulfillmentStatesConfiguration.prototype['Data'] = undefined;






export default RestApiResultFulfillmentStatesConfiguration;

