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
 * The OrderFulfillmentStatusBase model module.
 * @module model/OrderFulfillmentStatusBase
 * @version 1.0.0
 */
class OrderFulfillmentStatusBase {
    /**
     * Constructs a new <code>OrderFulfillmentStatusBase</code>.
     * Fulfillment Status Information
     * @alias module:model/OrderFulfillmentStatusBase
     */
    constructor() { 
        
        OrderFulfillmentStatusBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderFulfillmentStatusBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderFulfillmentStatusBase} obj Optional instance to populate.
     * @return {module:model/OrderFulfillmentStatusBase} The populated <code>OrderFulfillmentStatusBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderFulfillmentStatusBase();

            if (data.hasOwnProperty('StatusId')) {
                obj['StatusId'] = ApiClient.convertToType(data['StatusId'], 'String');
            }
            if (data.hasOwnProperty('StatusName')) {
                obj['StatusName'] = ApiClient.convertToType(data['StatusName'], 'String');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Fulfillment Status Id
 * @member {String} StatusId
 */
OrderFulfillmentStatusBase.prototype['StatusId'] = undefined;

/**
 * Fulfillment Status Name
 * @member {String} StatusName
 */
OrderFulfillmentStatusBase.prototype['StatusName'] = undefined;

/**
 * Status Icon
 * @member {String} Icon
 */
OrderFulfillmentStatusBase.prototype['Icon'] = undefined;






export default OrderFulfillmentStatusBase;

