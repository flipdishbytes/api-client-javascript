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
import UpdateAppStoreAppConfigurationWebhookDTO from './UpdateAppStoreAppConfigurationWebhookDTO';
import UserEventInfo from './UserEventInfo';

/**
 * The AppStoreConfigUpdatedEvent model module.
 * @module model/AppStoreConfigUpdatedEvent
 * @version 1.0.0
 */
class AppStoreConfigUpdatedEvent {
    /**
     * Constructs a new <code>AppStoreConfigUpdatedEvent</code>.
     * AppStore Config Updated event
     * @alias module:model/AppStoreConfigUpdatedEvent
     */
    constructor() { 
        
        AppStoreConfigUpdatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppStoreConfigUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppStoreConfigUpdatedEvent} obj Optional instance to populate.
     * @return {module:model/AppStoreConfigUpdatedEvent} The populated <code>AppStoreConfigUpdatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStoreConfigUpdatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppId')) {
                obj['AppStoreAppId'] = ApiClient.convertToType(data['AppStoreAppId'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppConfiguration')) {
                obj['AppStoreAppConfiguration'] = UpdateAppStoreAppConfigurationWebhookDTO.constructFromObject(data['AppStoreAppConfiguration']);
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
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
AppStoreConfigUpdatedEvent.prototype['EventName'] = undefined;

/**
 * App Store Id
 * @member {String} AppStoreAppId
 */
AppStoreConfigUpdatedEvent.prototype['AppStoreAppId'] = undefined;

/**
 * @member {module:model/UpdateAppStoreAppConfigurationWebhookDTO} AppStoreAppConfiguration
 */
AppStoreConfigUpdatedEvent.prototype['AppStoreAppConfiguration'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
AppStoreConfigUpdatedEvent.prototype['User'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
AppStoreConfigUpdatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
AppStoreConfigUpdatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
AppStoreConfigUpdatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
AppStoreConfigUpdatedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
AppStoreConfigUpdatedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
AppStoreConfigUpdatedEvent.prototype['IpAddress'] = undefined;






export default AppStoreConfigUpdatedEvent;

