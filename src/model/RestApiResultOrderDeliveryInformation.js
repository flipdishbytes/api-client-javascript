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
import OrderDeliveryInformation from './OrderDeliveryInformation';

/**
 * The RestApiResultOrderDeliveryInformation model module.
 * @module model/RestApiResultOrderDeliveryInformation
 * @version 1.0.0
 */
class RestApiResultOrderDeliveryInformation {
    /**
     * Constructs a new <code>RestApiResultOrderDeliveryInformation</code>.
     * Rest api result
     * @alias module:model/RestApiResultOrderDeliveryInformation
     * @param Data {module:model/OrderDeliveryInformation} 
     */
    constructor(Data) { 
        
        RestApiResultOrderDeliveryInformation.initialize(this, Data);
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
     * Constructs a <code>RestApiResultOrderDeliveryInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultOrderDeliveryInformation} obj Optional instance to populate.
     * @return {module:model/RestApiResultOrderDeliveryInformation} The populated <code>RestApiResultOrderDeliveryInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultOrderDeliveryInformation();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = OrderDeliveryInformation.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OrderDeliveryInformation} Data
 */
RestApiResultOrderDeliveryInformation.prototype['Data'] = undefined;






export default RestApiResultOrderDeliveryInformation;

