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
 * The KioskBluetoothUnpairingModeEvent model module.
 * @module model/KioskBluetoothUnpairingModeEvent
 * @version 1.0.0
 */
class KioskBluetoothUnpairingModeEvent {
    /**
     * Constructs a new <code>KioskBluetoothUnpairingModeEvent</code>.
     * Kiosk Bluetooth Unpairing mode initiated
     * @alias module:model/KioskBluetoothUnpairingModeEvent
     */
    constructor() { 
        
        KioskBluetoothUnpairingModeEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KioskBluetoothUnpairingModeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KioskBluetoothUnpairingModeEvent} obj Optional instance to populate.
     * @return {module:model/KioskBluetoothUnpairingModeEvent} The populated <code>KioskBluetoothUnpairingModeEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KioskBluetoothUnpairingModeEvent();

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
KioskBluetoothUnpairingModeEvent.prototype['DeviceId'] = undefined;

/**
 * Terminal Type
 * @member {module:model/KioskBluetoothUnpairingModeEvent.BluetoothTerminalTypeEnum} BluetoothTerminalType
 */
KioskBluetoothUnpairingModeEvent.prototype['BluetoothTerminalType'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
KioskBluetoothUnpairingModeEvent.prototype['User'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
KioskBluetoothUnpairingModeEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
KioskBluetoothUnpairingModeEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
KioskBluetoothUnpairingModeEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
KioskBluetoothUnpairingModeEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
KioskBluetoothUnpairingModeEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
KioskBluetoothUnpairingModeEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
KioskBluetoothUnpairingModeEvent.prototype['IpAddress'] = undefined;





/**
 * Allowed values for the <code>BluetoothTerminalType</code> property.
 * @enum {String}
 * @readonly
 */
KioskBluetoothUnpairingModeEvent['BluetoothTerminalTypeEnum'] = {

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



export default KioskBluetoothUnpairingModeEvent;

