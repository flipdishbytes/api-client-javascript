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
import CatalogItem from './CatalogItem';
import UserEventInfo from './UserEventInfo';

/**
 * The CatalogItemCreatedEvent model module.
 * @module model/CatalogItemCreatedEvent
 * @version 1.0.0
 */
class CatalogItemCreatedEvent {
    /**
     * Constructs a new <code>CatalogItemCreatedEvent</code>.
     * 
     * @alias module:model/CatalogItemCreatedEvent
     */
    constructor() { 
        
        CatalogItemCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogItemCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogItemCreatedEvent} obj Optional instance to populate.
     * @return {module:model/CatalogItemCreatedEvent} The populated <code>CatalogItemCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogItemCreatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('CatalogItem')) {
                obj['CatalogItem'] = CatalogItem.constructFromObject(data['CatalogItem']);
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
CatalogItemCreatedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
CatalogItemCreatedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
CatalogItemCreatedEvent.prototype['User'] = undefined;

/**
 * @member {module:model/CatalogItem} CatalogItem
 */
CatalogItemCreatedEvent.prototype['CatalogItem'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
CatalogItemCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
CatalogItemCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
CatalogItemCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
CatalogItemCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
CatalogItemCreatedEvent.prototype['IpAddress'] = undefined;






export default CatalogItemCreatedEvent;

