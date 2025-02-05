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
 * The WebsiteUpdatedEvent model module.
 * @module model/WebsiteUpdatedEvent
 * @version 1.0.0
 */
class WebsiteUpdatedEvent {
    /**
     * Constructs a new <code>WebsiteUpdatedEvent</code>.
     * WebsiteUpdatedEvent
     * @alias module:model/WebsiteUpdatedEvent
     */
    constructor() { 
        
        WebsiteUpdatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebsiteUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebsiteUpdatedEvent} obj Optional instance to populate.
     * @return {module:model/WebsiteUpdatedEvent} The populated <code>WebsiteUpdatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsiteUpdatedEvent();

            if (data.hasOwnProperty('AppNameId')) {
                obj['AppNameId'] = ApiClient.convertToType(data['AppNameId'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
 * App Name id of the whitelabel of the website
 * @member {String} AppNameId
 */
WebsiteUpdatedEvent.prototype['AppNameId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
WebsiteUpdatedEvent.prototype['User'] = undefined;

/**
 * Description of event
 * @member {String} Description
 */
WebsiteUpdatedEvent.prototype['Description'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
WebsiteUpdatedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
WebsiteUpdatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
WebsiteUpdatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
WebsiteUpdatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
WebsiteUpdatedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
WebsiteUpdatedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
WebsiteUpdatedEvent.prototype['IpAddress'] = undefined;






export default WebsiteUpdatedEvent;

