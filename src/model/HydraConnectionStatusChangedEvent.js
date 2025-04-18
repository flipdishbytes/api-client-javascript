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
 * The HydraConnectionStatusChangedEvent model module.
 * @module model/HydraConnectionStatusChangedEvent
 * @version 1.0.0
 */
class HydraConnectionStatusChangedEvent {
    /**
     * Constructs a new <code>HydraConnectionStatusChangedEvent</code>.
     * Hydra Connection Status Changed Event
     * @alias module:model/HydraConnectionStatusChangedEvent
     */
    constructor() { 
        
        HydraConnectionStatusChangedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HydraConnectionStatusChangedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HydraConnectionStatusChangedEvent} obj Optional instance to populate.
     * @return {module:model/HydraConnectionStatusChangedEvent} The populated <code>HydraConnectionStatusChangedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HydraConnectionStatusChangedEvent();

            if (data.hasOwnProperty('DeviceId')) {
                obj['DeviceId'] = ApiClient.convertToType(data['DeviceId'], 'String');
            }
            if (data.hasOwnProperty('HydraDeviceStatus')) {
                obj['HydraDeviceStatus'] = ApiClient.convertToType(data['HydraDeviceStatus'], 'String');
            }
            if (data.hasOwnProperty('PollTime')) {
                obj['PollTime'] = ApiClient.convertToType(data['PollTime'], 'Date');
            }
            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
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
 * Hydra Device Id
 * @member {String} DeviceId
 */
HydraConnectionStatusChangedEvent.prototype['DeviceId'] = undefined;

/**
 * Hydra Device Status
 * @member {module:model/HydraConnectionStatusChangedEvent.HydraDeviceStatusEnum} HydraDeviceStatus
 */
HydraConnectionStatusChangedEvent.prototype['HydraDeviceStatus'] = undefined;

/**
 * Hydra Last Poll Time
 * @member {Date} PollTime
 */
HydraConnectionStatusChangedEvent.prototype['PollTime'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
HydraConnectionStatusChangedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
HydraConnectionStatusChangedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
HydraConnectionStatusChangedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
HydraConnectionStatusChangedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
HydraConnectionStatusChangedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
HydraConnectionStatusChangedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
HydraConnectionStatusChangedEvent.prototype['IpAddress'] = undefined;





/**
 * Allowed values for the <code>HydraDeviceStatus</code> property.
 * @enum {String}
 * @readonly
 */
HydraConnectionStatusChangedEvent['HydraDeviceStatusEnum'] = {

    /**
     * value: "Online"
     * @const
     */
    "Online": "Online",

    /**
     * value: "PossiblyOffline"
     * @const
     */
    "PossiblyOffline": "PossiblyOffline",

    /**
     * value: "Offline"
     * @const
     */
    "Offline": "Offline"
};



export default HydraConnectionStatusChangedEvent;

