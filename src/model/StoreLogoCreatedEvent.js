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
 * The StoreLogoCreatedEvent model module.
 * @module model/StoreLogoCreatedEvent
 * @version 1.0.0
 */
class StoreLogoCreatedEvent {
    /**
     * Constructs a new <code>StoreLogoCreatedEvent</code>.
     * Store logo created
     * @alias module:model/StoreLogoCreatedEvent
     */
    constructor() { 
        
        StoreLogoCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreLogoCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreLogoCreatedEvent} obj Optional instance to populate.
     * @return {module:model/StoreLogoCreatedEvent} The populated <code>StoreLogoCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreLogoCreatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'String');
            }
            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
StoreLogoCreatedEvent.prototype['EventName'] = undefined;

/**
 * Organisation Id
 * @member {String} OrgId
 */
StoreLogoCreatedEvent.prototype['OrgId'] = undefined;

/**
 * ID of store that the logo has been added to
 * @member {Number} StoreId
 */
StoreLogoCreatedEvent.prototype['StoreId'] = undefined;

/**
 * Description
 * @member {String} Description
 */
StoreLogoCreatedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
StoreLogoCreatedEvent.prototype['User'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
StoreLogoCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
StoreLogoCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
StoreLogoCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
StoreLogoCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
StoreLogoCreatedEvent.prototype['IpAddress'] = undefined;






export default StoreLogoCreatedEvent;

