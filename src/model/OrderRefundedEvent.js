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
import UserEventInfo from './UserEventInfo';

/**
 * The OrderRefundedEvent model module.
 * @module model/OrderRefundedEvent
 * @version 1.0.0
 */
class OrderRefundedEvent {
    /**
     * Constructs a new <code>OrderRefundedEvent</code>.
     * Order Refunded Event
     * @alias module:model/OrderRefundedEvent
     */
    constructor() { 
        
        OrderRefundedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderRefundedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderRefundedEvent} obj Optional instance to populate.
     * @return {module:model/OrderRefundedEvent} The populated <code>OrderRefundedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRefundedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('RefundedAmount')) {
                obj['RefundedAmount'] = ApiClient.convertToType(data['RefundedAmount'], 'Number');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
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
OrderRefundedEvent.prototype['EventName'] = undefined;

/**
 * The amount refunded
 * @member {Number} RefundedAmount
 */
OrderRefundedEvent.prototype['RefundedAmount'] = undefined;

/**
 * Description
 * @member {String} Description
 */
OrderRefundedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
OrderRefundedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/Order} Order
 */
OrderRefundedEvent.prototype['Order'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
OrderRefundedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
OrderRefundedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
OrderRefundedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
OrderRefundedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
OrderRefundedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
OrderRefundedEvent.prototype['IpAddress'] = undefined;






export default OrderRefundedEvent;

