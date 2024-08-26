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
 * The AppCreatedEvent model module.
 * @module model/AppCreatedEvent
 * @version 1.0.0
 */
class AppCreatedEvent {
    /**
     * Constructs a new <code>AppCreatedEvent</code>.
     * Application created event
     * @alias module:model/AppCreatedEvent
     */
    constructor() { 
        
        AppCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppCreatedEvent} obj Optional instance to populate.
     * @return {module:model/AppCreatedEvent} The populated <code>AppCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppCreatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('AppName')) {
                obj['AppName'] = ApiClient.convertToType(data['AppName'], 'String');
            }
            if (data.hasOwnProperty('CountryId')) {
                obj['CountryId'] = ApiClient.convertToType(data['CountryId'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('AccountId')) {
                obj['AccountId'] = ApiClient.convertToType(data['AccountId'], 'String');
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
AppCreatedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
AppCreatedEvent.prototype['Description'] = undefined;

/**
 * App Name
 * @member {String} AppName
 */
AppCreatedEvent.prototype['AppName'] = undefined;

/**
 * Country Id
 * @member {String} CountryId
 */
AppCreatedEvent.prototype['CountryId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
AppCreatedEvent.prototype['User'] = undefined;

/**
 * Salesforce Account Id
 * @member {String} AccountId
 */
AppCreatedEvent.prototype['AccountId'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
AppCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
AppCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
AppCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
AppCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
AppCreatedEvent.prototype['IpAddress'] = undefined;






export default AppCreatedEvent;

