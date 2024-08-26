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
import MenuItemOptionSetItem from './MenuItemOptionSetItem';
import UserEventInfo from './UserEventInfo';

/**
 * The MenuItemOptionSetItemCreatedEvent model module.
 * @module model/MenuItemOptionSetItemCreatedEvent
 * @version 1.0.0
 */
class MenuItemOptionSetItemCreatedEvent {
    /**
     * Constructs a new <code>MenuItemOptionSetItemCreatedEvent</code>.
     * 
     * @alias module:model/MenuItemOptionSetItemCreatedEvent
     */
    constructor() { 
        
        MenuItemOptionSetItemCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuItemOptionSetItemCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuItemOptionSetItemCreatedEvent} obj Optional instance to populate.
     * @return {module:model/MenuItemOptionSetItemCreatedEvent} The populated <code>MenuItemOptionSetItemCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuItemOptionSetItemCreatedEvent();

            if (data.hasOwnProperty('MenuId')) {
                obj['MenuId'] = ApiClient.convertToType(data['MenuId'], 'Number');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('MenuItemOptionSetItem')) {
                obj['MenuItemOptionSetItem'] = MenuItemOptionSetItem.constructFromObject(data['MenuItemOptionSetItem']);
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
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Menu identifier
 * @member {Number} MenuId
 */
MenuItemOptionSetItemCreatedEvent.prototype['MenuId'] = undefined;

/**
 * Description
 * @member {String} Description
 */
MenuItemOptionSetItemCreatedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
MenuItemOptionSetItemCreatedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/MenuItemOptionSetItem} MenuItemOptionSetItem
 */
MenuItemOptionSetItemCreatedEvent.prototype['MenuItemOptionSetItem'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
MenuItemOptionSetItemCreatedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
MenuItemOptionSetItemCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
MenuItemOptionSetItemCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
MenuItemOptionSetItemCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
MenuItemOptionSetItemCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
MenuItemOptionSetItemCreatedEvent.prototype['IpAddress'] = undefined;






export default MenuItemOptionSetItemCreatedEvent;

