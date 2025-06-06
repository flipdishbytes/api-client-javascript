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
 * The OrderRejectedEvent model module.
 * @module model/OrderRejectedEvent
 * @version 1.0.0
 */
class OrderRejectedEvent {
    /**
     * Constructs a new <code>OrderRejectedEvent</code>.
     * Order Rejected Event
     * @alias module:model/OrderRejectedEvent
     */
    constructor() { 
        
        OrderRejectedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderRejectedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderRejectedEvent} obj Optional instance to populate.
     * @return {module:model/OrderRejectedEvent} The populated <code>OrderRejectedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRejectedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('OrderRejectedTime')) {
                obj['OrderRejectedTime'] = ApiClient.convertToType(data['OrderRejectedTime'], 'Date');
            }
            if (data.hasOwnProperty('Reason')) {
                obj['Reason'] = ApiClient.convertToType(data['Reason'], 'String');
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
OrderRejectedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
OrderRejectedEvent.prototype['Description'] = undefined;

/**
 * Order Rejected Time
 * @member {Date} OrderRejectedTime
 */
OrderRejectedEvent.prototype['OrderRejectedTime'] = undefined;

/**
 * Reason for Rejection
 * @member {String} Reason
 */
OrderRejectedEvent.prototype['Reason'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
OrderRejectedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/Order} Order
 */
OrderRejectedEvent.prototype['Order'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
OrderRejectedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
OrderRejectedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
OrderRejectedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
OrderRejectedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
OrderRejectedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
OrderRejectedEvent.prototype['IpAddress'] = undefined;






export default OrderRejectedEvent;

