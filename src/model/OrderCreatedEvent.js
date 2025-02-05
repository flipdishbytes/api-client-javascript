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
import Order from './Order';

/**
 * The OrderCreatedEvent model module.
 * @module model/OrderCreatedEvent
 * @version 1.0.0
 */
class OrderCreatedEvent {
    /**
     * Constructs a new <code>OrderCreatedEvent</code>.
     * Order Created Event
     * @alias module:model/OrderCreatedEvent
     */
    constructor() { 
        
        OrderCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreatedEvent} obj Optional instance to populate.
     * @return {module:model/OrderCreatedEvent} The populated <code>OrderCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('OrderCreatedTime')) {
                obj['OrderCreatedTime'] = ApiClient.convertToType(data['OrderCreatedTime'], 'Date');
            }
            if (data.hasOwnProperty('Order')) {
                obj['Order'] = Order.constructFromObject(data['Order']);
            }
            if (data.hasOwnProperty('FlipdishEventId')) {
                obj['FlipdishEventId'] = ApiClient.convertToType(data['FlipdishEventId'], 'String');
            }
            if (data.hasOwnProperty('CreateTime')) {
                obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
            }
            if (data.hasOwnProperty('Position')) {
                obj['Position'] = ApiClient.convertToType(data['Position'], 'Number');
            }
            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'String');
            }
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The event name
 * @member {String} EventName
 */
OrderCreatedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
OrderCreatedEvent.prototype['Description'] = undefined;

/**
 * Order Created Time
 * @member {Date} OrderCreatedTime
 */
OrderCreatedEvent.prototype['OrderCreatedTime'] = undefined;

/**
 * @member {module:model/Order} Order
 */
OrderCreatedEvent.prototype['Order'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
OrderCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
OrderCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
OrderCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
OrderCreatedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
OrderCreatedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
OrderCreatedEvent.prototype['IpAddress'] = undefined;






export default OrderCreatedEvent;

