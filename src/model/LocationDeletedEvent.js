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
 * The LocationDeletedEvent model module.
 * @module model/LocationDeletedEvent
 * @version 1.0.0
 */
class LocationDeletedEvent {
    /**
     * Constructs a new <code>LocationDeletedEvent</code>.
     * Event for logging the deleting of Locations
     * @alias module:model/LocationDeletedEvent
     */
    constructor() { 
        
        LocationDeletedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationDeletedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationDeletedEvent} obj Optional instance to populate.
     * @return {module:model/LocationDeletedEvent} The populated <code>LocationDeletedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationDeletedEvent();

            if (data.hasOwnProperty('LocationId')) {
                obj['LocationId'] = ApiClient.convertToType(data['LocationId'], 'Number');
            }
            if (data.hasOwnProperty('LocationName')) {
                obj['LocationName'] = ApiClient.convertToType(data['LocationName'], 'String');
            }
            if (data.hasOwnProperty('DisplayOrder')) {
                obj['DisplayOrder'] = ApiClient.convertToType(data['DisplayOrder'], 'Number');
            }
            if (data.hasOwnProperty('ExternalLocationId')) {
                obj['ExternalLocationId'] = ApiClient.convertToType(data['ExternalLocationId'], 'String');
            }
            if (data.hasOwnProperty('LocationAreaId')) {
                obj['LocationAreaId'] = ApiClient.convertToType(data['LocationAreaId'], 'Number');
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
 * Location Id
 * @member {Number} LocationId
 */
LocationDeletedEvent.prototype['LocationId'] = undefined;

/**
 * Location Name
 * @member {String} LocationName
 */
LocationDeletedEvent.prototype['LocationName'] = undefined;

/**
 * Location DisplayOrder
 * @member {Number} DisplayOrder
 */
LocationDeletedEvent.prototype['DisplayOrder'] = undefined;

/**
 * Location ExternalLocationId
 * @member {String} ExternalLocationId
 */
LocationDeletedEvent.prototype['ExternalLocationId'] = undefined;

/**
 * LocationAreaId
 * @member {Number} LocationAreaId
 */
LocationDeletedEvent.prototype['LocationAreaId'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
LocationDeletedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
LocationDeletedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
LocationDeletedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
LocationDeletedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
LocationDeletedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
LocationDeletedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
LocationDeletedEvent.prototype['IpAddress'] = undefined;






export default LocationDeletedEvent;

