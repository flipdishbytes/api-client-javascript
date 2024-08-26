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
 * The AppStoreConfigCreatedEvent model module.
 * @module model/AppStoreConfigCreatedEvent
 * @version 1.0.0
 */
class AppStoreConfigCreatedEvent {
    /**
     * Constructs a new <code>AppStoreConfigCreatedEvent</code>.
     * AppStore Config Created event
     * @alias module:model/AppStoreConfigCreatedEvent
     */
    constructor() { 
        
        AppStoreConfigCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppStoreConfigCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppStoreConfigCreatedEvent} obj Optional instance to populate.
     * @return {module:model/AppStoreConfigCreatedEvent} The populated <code>AppStoreConfigCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStoreConfigCreatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppId')) {
                obj['AppStoreAppId'] = ApiClient.convertToType(data['AppStoreAppId'], 'String');
            }
            if (data.hasOwnProperty('AppStoreAppConfigurationId')) {
                obj['AppStoreAppConfigurationId'] = ApiClient.convertToType(data['AppStoreAppConfigurationId'], 'String');
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
AppStoreConfigCreatedEvent.prototype['EventName'] = undefined;

/**
 * App Store App Id
 * @member {String} AppStoreAppId
 */
AppStoreConfigCreatedEvent.prototype['AppStoreAppId'] = undefined;

/**
 * App Store Configuration Id
 * @member {String} AppStoreAppConfigurationId
 */
AppStoreConfigCreatedEvent.prototype['AppStoreAppConfigurationId'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
AppStoreConfigCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
AppStoreConfigCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
AppStoreConfigCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
AppStoreConfigCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
AppStoreConfigCreatedEvent.prototype['IpAddress'] = undefined;






export default AppStoreConfigCreatedEvent;

