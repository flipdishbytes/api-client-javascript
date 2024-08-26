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
 * The OrderFulfillmentStatusUpdate model module.
 * @module model/OrderFulfillmentStatusUpdate
 * @version 1.0.0
 */
class OrderFulfillmentStatusUpdate {
    /**
     * Constructs a new <code>OrderFulfillmentStatusUpdate</code>.
     * @alias module:model/OrderFulfillmentStatusUpdate
     */
    constructor() { 
        
        OrderFulfillmentStatusUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderFulfillmentStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderFulfillmentStatusUpdate} obj Optional instance to populate.
     * @return {module:model/OrderFulfillmentStatusUpdate} The populated <code>OrderFulfillmentStatusUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderFulfillmentStatusUpdate();

            if (data.hasOwnProperty('StatusId')) {
                obj['StatusId'] = ApiClient.convertToType(data['StatusId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Fulfillment Status Id
 * @member {String} StatusId
 */
OrderFulfillmentStatusUpdate.prototype['StatusId'] = undefined;






export default OrderFulfillmentStatusUpdate;

