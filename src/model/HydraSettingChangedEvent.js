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
import HydraConfig from './HydraConfig';
import UserEventInfo from './UserEventInfo';

/**
 * The HydraSettingChangedEvent model module.
 * @module model/HydraSettingChangedEvent
 * @version 1.0.0
 */
class HydraSettingChangedEvent {
    /**
     * Constructs a new <code>HydraSettingChangedEvent</code>.
     * Hydra settings changed
     * @alias module:model/HydraSettingChangedEvent
     */
    constructor() { 
        
        HydraSettingChangedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HydraSettingChangedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HydraSettingChangedEvent} obj Optional instance to populate.
     * @return {module:model/HydraSettingChangedEvent} The populated <code>HydraSettingChangedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HydraSettingChangedEvent();

            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('HydraConfig')) {
                obj['HydraConfig'] = HydraConfig.constructFromObject(data['HydraConfig']);
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
 * @member {module:model/UserEventInfo} User
 */
HydraSettingChangedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/HydraConfig} HydraConfig
 */
HydraSettingChangedEvent.prototype['HydraConfig'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
HydraSettingChangedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
HydraSettingChangedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
HydraSettingChangedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
HydraSettingChangedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
HydraSettingChangedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
HydraSettingChangedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
HydraSettingChangedEvent.prototype['IpAddress'] = undefined;






export default HydraSettingChangedEvent;

