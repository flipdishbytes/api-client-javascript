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
 * The OrderAcceptedEvent model module.
 * @module model/OrderAcceptedEvent
 * @version 1.0.0
 */
class OrderAcceptedEvent {
    /**
     * Constructs a new <code>OrderAcceptedEvent</code>.
     * Order Accepted Event
     * @alias module:model/OrderAcceptedEvent
     */
    constructor() { 
        
        OrderAcceptedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderAcceptedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderAcceptedEvent} obj Optional instance to populate.
     * @return {module:model/OrderAcceptedEvent} The populated <code>OrderAcceptedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAcceptedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('OrderAcceptedTime')) {
                obj['OrderAcceptedTime'] = ApiClient.convertToType(data['OrderAcceptedTime'], 'Date');
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
OrderAcceptedEvent.prototype['EventName'] = undefined;

/**
 * Organisation Id
 * @member {String} OrgId
 */
OrderAcceptedEvent.prototype['OrgId'] = undefined;

/**
 * Description
 * @member {String} Description
 */
OrderAcceptedEvent.prototype['Description'] = undefined;

/**
 * Order Accepted Time
 * @member {Date} OrderAcceptedTime
 */
OrderAcceptedEvent.prototype['OrderAcceptedTime'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
OrderAcceptedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/Order} Order
 */
OrderAcceptedEvent.prototype['Order'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
OrderAcceptedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
OrderAcceptedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
OrderAcceptedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
OrderAcceptedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
OrderAcceptedEvent.prototype['IpAddress'] = undefined;






export default OrderAcceptedEvent;

