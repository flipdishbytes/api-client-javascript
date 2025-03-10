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
 * The StoreLogoDeletedEvent model module.
 * @module model/StoreLogoDeletedEvent
 * @version 1.0.0
 */
class StoreLogoDeletedEvent {
    /**
     * Constructs a new <code>StoreLogoDeletedEvent</code>.
     * Store logo deleted
     * @alias module:model/StoreLogoDeletedEvent
     */
    constructor() { 
        
        StoreLogoDeletedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreLogoDeletedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreLogoDeletedEvent} obj Optional instance to populate.
     * @return {module:model/StoreLogoDeletedEvent} The populated <code>StoreLogoDeletedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreLogoDeletedEvent();

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
StoreLogoDeletedEvent.prototype['EventName'] = undefined;

/**
 * Organisation Id
 * @member {String} OrgId
 */
StoreLogoDeletedEvent.prototype['OrgId'] = undefined;

/**
 * ID of store that the logo has been added to
 * @member {Number} StoreId
 */
StoreLogoDeletedEvent.prototype['StoreId'] = undefined;

/**
 * Description
 * @member {String} Description
 */
StoreLogoDeletedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
StoreLogoDeletedEvent.prototype['User'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
StoreLogoDeletedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
StoreLogoDeletedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
StoreLogoDeletedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
StoreLogoDeletedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
StoreLogoDeletedEvent.prototype['IpAddress'] = undefined;






export default StoreLogoDeletedEvent;

