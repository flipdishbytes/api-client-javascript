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
 * The AppStoreConfigDeletedEvent model module.
 * @module model/AppStoreConfigDeletedEvent
 * @version 1.0.0
 */
class AppStoreConfigDeletedEvent {
    /**
     * Constructs a new <code>AppStoreConfigDeletedEvent</code>.
     * AppStore Config Deleted event
     * @alias module:model/AppStoreConfigDeletedEvent
     */
    constructor() { 
        
        AppStoreConfigDeletedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppStoreConfigDeletedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppStoreConfigDeletedEvent} obj Optional instance to populate.
     * @return {module:model/AppStoreConfigDeletedEvent} The populated <code>AppStoreConfigDeletedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStoreConfigDeletedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppId')) {
                obj['AppStoreAppId'] = ApiClient.convertToType(data['AppStoreAppId'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppConfigurationId')) {
                obj['AppStoreAppConfigurationId'] = ApiClient.convertToType(data['AppStoreAppConfigurationId'], 'String');
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
AppStoreConfigDeletedEvent.prototype['EventName'] = undefined;

/**
 * App Store Id
 * @member {String} AppStoreAppId
 */
AppStoreConfigDeletedEvent.prototype['AppStoreAppId'] = undefined;

/**
 * App Store Configuration Id
 * @member {String} AppStoreAppConfigurationId
 */
AppStoreConfigDeletedEvent.prototype['AppStoreAppConfigurationId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
AppStoreConfigDeletedEvent.prototype['User'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
AppStoreConfigDeletedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
AppStoreConfigDeletedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
AppStoreConfigDeletedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
AppStoreConfigDeletedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
AppStoreConfigDeletedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
AppStoreConfigDeletedEvent.prototype['IpAddress'] = undefined;






export default AppStoreConfigDeletedEvent;

