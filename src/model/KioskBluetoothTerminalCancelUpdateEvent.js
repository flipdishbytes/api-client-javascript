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
 * The KioskBluetoothTerminalCancelUpdateEvent model module.
 * @module model/KioskBluetoothTerminalCancelUpdateEvent
 * @version 1.0.0
 */
class KioskBluetoothTerminalCancelUpdateEvent {
    /**
     * Constructs a new <code>KioskBluetoothTerminalCancelUpdateEvent</code>.
     * Kiosk bluetooth Cancel Update Install Event
     * @alias module:model/KioskBluetoothTerminalCancelUpdateEvent
     */
    constructor() { 
        
        KioskBluetoothTerminalCancelUpdateEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KioskBluetoothTerminalCancelUpdateEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KioskBluetoothTerminalCancelUpdateEvent} obj Optional instance to populate.
     * @return {module:model/KioskBluetoothTerminalCancelUpdateEvent} The populated <code>KioskBluetoothTerminalCancelUpdateEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KioskBluetoothTerminalCancelUpdateEvent();

            if (data.hasOwnProperty('DeviceId')) {
                obj['DeviceId'] = ApiClient.convertToType(data['DeviceId'], 'String');
            }
            if (data.hasOwnProperty('BluetoothTerminalType')) {
                obj['BluetoothTerminalType'] = ApiClient.convertToType(data['BluetoothTerminalType'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
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
 * Device Id of the Kiosk
 * @member {String} DeviceId
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['DeviceId'] = undefined;

/**
 * Terminal Type
 * @member {module:model/KioskBluetoothTerminalCancelUpdateEvent.BluetoothTerminalTypeEnum} BluetoothTerminalType
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['BluetoothTerminalType'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['User'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
KioskBluetoothTerminalCancelUpdateEvent.prototype['IpAddress'] = undefined;





/**
 * Allowed values for the <code>BluetoothTerminalType</code> property.
 * @enum {String}
 * @readonly
 */
KioskBluetoothTerminalCancelUpdateEvent['BluetoothTerminalTypeEnum'] = {

    /**
     * value: "CHIPPER_2X"
     * @const
     */
    "CHIPPER_2X": "CHIPPER_2X",

    /**
     * value: "COTS_DEVICE"
     * @const
     */
    "COTS_DEVICE": "COTS_DEVICE",

    /**
     * value: "VERIFONE_P400"
     * @const
     */
    "VERIFONE_P400": "VERIFONE_P400",

    /**
     * value: "WISEPAD_3"
     * @const
     */
    "WISEPAD_3": "WISEPAD_3",

    /**
     * value: "WISEPOS_E"
     * @const
     */
    "WISEPOS_E": "WISEPOS_E"
};



export default KioskBluetoothTerminalCancelUpdateEvent;

