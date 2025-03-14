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
 * The LocationAreaUpdatedEvent model module.
 * @module model/LocationAreaUpdatedEvent
 * @version 1.0.0
 */
class LocationAreaUpdatedEvent {
    /**
     * Constructs a new <code>LocationAreaUpdatedEvent</code>.
     * Event for logging updates of LocationAreas
     * @alias module:model/LocationAreaUpdatedEvent
     */
    constructor() { 
        
        LocationAreaUpdatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationAreaUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationAreaUpdatedEvent} obj Optional instance to populate.
     * @return {module:model/LocationAreaUpdatedEvent} The populated <code>LocationAreaUpdatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationAreaUpdatedEvent();

            if (data.hasOwnProperty('LocationAreaId')) {
                obj['LocationAreaId'] = ApiClient.convertToType(data['LocationAreaId'], 'String');
            }
            if (data.hasOwnProperty('LocationAreaName')) {
                obj['LocationAreaName'] = ApiClient.convertToType(data['LocationAreaName'], 'String');
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
 * LocationArea Id
 * @member {String} LocationAreaId
 */
LocationAreaUpdatedEvent.prototype['LocationAreaId'] = undefined;

/**
 * LocationArea Name
 * @member {String} LocationAreaName
 */
LocationAreaUpdatedEvent.prototype['LocationAreaName'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
LocationAreaUpdatedEvent.prototype['User'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
LocationAreaUpdatedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
LocationAreaUpdatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
LocationAreaUpdatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
LocationAreaUpdatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
LocationAreaUpdatedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
LocationAreaUpdatedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
LocationAreaUpdatedEvent.prototype['IpAddress'] = undefined;






export default LocationAreaUpdatedEvent;

