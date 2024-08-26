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
import UserEventInfo from './UserEventInfo';

/**
 * The CustomerUpdatedEvent model module.
 * @module model/CustomerUpdatedEvent
 * @version 1.0.0
 */
class CustomerUpdatedEvent {
    /**
     * Constructs a new <code>CustomerUpdatedEvent</code>.
     * Customer updated event
     * @alias module:model/CustomerUpdatedEvent
     */
    constructor() { 
        
        CustomerUpdatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerUpdatedEvent} obj Optional instance to populate.
     * @return {module:model/CustomerUpdatedEvent} The populated <code>CustomerUpdatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerUpdatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
CustomerUpdatedEvent.prototype['EventName'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
CustomerUpdatedEvent.prototype['User'] = undefined;

/**
 * Description
 * @member {String} Description
 */
CustomerUpdatedEvent.prototype['Description'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
CustomerUpdatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
CustomerUpdatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
CustomerUpdatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
CustomerUpdatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
CustomerUpdatedEvent.prototype['IpAddress'] = undefined;






export default CustomerUpdatedEvent;

