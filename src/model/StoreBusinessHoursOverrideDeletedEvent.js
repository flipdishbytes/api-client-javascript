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
import BusinessHoursOverride from './BusinessHoursOverride';
import UserEventInfo from './UserEventInfo';

/**
 * The StoreBusinessHoursOverrideDeletedEvent model module.
 * @module model/StoreBusinessHoursOverrideDeletedEvent
 * @version 1.0.0
 */
class StoreBusinessHoursOverrideDeletedEvent {
    /**
     * Constructs a new <code>StoreBusinessHoursOverrideDeletedEvent</code>.
     * Store Business Hours Override Deleted
     * @alias module:model/StoreBusinessHoursOverrideDeletedEvent
     */
    constructor() { 
        
        StoreBusinessHoursOverrideDeletedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreBusinessHoursOverrideDeletedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreBusinessHoursOverrideDeletedEvent} obj Optional instance to populate.
     * @return {module:model/StoreBusinessHoursOverrideDeletedEvent} The populated <code>StoreBusinessHoursOverrideDeletedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreBusinessHoursOverrideDeletedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('StoreGroupId')) {
                obj['StoreGroupId'] = ApiClient.convertToType(data['StoreGroupId'], 'Number');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('BusinessHoursOverride')) {
                obj['BusinessHoursOverride'] = BusinessHoursOverride.constructFromObject(data['BusinessHoursOverride']);
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
StoreBusinessHoursOverrideDeletedEvent.prototype['EventName'] = undefined;

/**
 * Store Id
 * @member {Number} StoreId
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['StoreId'] = undefined;

/**
 * Store group Id
 * @member {Number} StoreGroupId
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['StoreGroupId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['User'] = undefined;

/**
 * Description
 * @member {String} Description
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/BusinessHoursOverride} BusinessHoursOverride
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['BusinessHoursOverride'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
StoreBusinessHoursOverrideDeletedEvent.prototype['IpAddress'] = undefined;






export default StoreBusinessHoursOverrideDeletedEvent;

