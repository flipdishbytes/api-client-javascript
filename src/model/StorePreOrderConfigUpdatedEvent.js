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
import PreOrderConfig from './PreOrderConfig';
import UserEventInfo from './UserEventInfo';

/**
 * The StorePreOrderConfigUpdatedEvent model module.
 * @module model/StorePreOrderConfigUpdatedEvent
 * @version 1.0.0
 */
class StorePreOrderConfigUpdatedEvent {
    /**
     * Constructs a new <code>StorePreOrderConfigUpdatedEvent</code>.
     * Store Pre order config updated
     * @alias module:model/StorePreOrderConfigUpdatedEvent
     */
    constructor() { 
        
        StorePreOrderConfigUpdatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorePreOrderConfigUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorePreOrderConfigUpdatedEvent} obj Optional instance to populate.
     * @return {module:model/StorePreOrderConfigUpdatedEvent} The populated <code>StorePreOrderConfigUpdatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorePreOrderConfigUpdatedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('PreOrderConfig')) {
                obj['PreOrderConfig'] = PreOrderConfig.constructFromObject(data['PreOrderConfig']);
            }
            if (data.hasOwnProperty('OldPreOrderConfig')) {
                obj['OldPreOrderConfig'] = PreOrderConfig.constructFromObject(data['OldPreOrderConfig']);
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
StorePreOrderConfigUpdatedEvent.prototype['EventName'] = undefined;

/**
 * Store Id
 * @member {Number} StoreId
 */
StorePreOrderConfigUpdatedEvent.prototype['StoreId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
StorePreOrderConfigUpdatedEvent.prototype['User'] = undefined;

/**
 * Description
 * @member {String} Description
 */
StorePreOrderConfigUpdatedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/PreOrderConfig} PreOrderConfig
 */
StorePreOrderConfigUpdatedEvent.prototype['PreOrderConfig'] = undefined;

/**
 * @member {module:model/PreOrderConfig} OldPreOrderConfig
 */
StorePreOrderConfigUpdatedEvent.prototype['OldPreOrderConfig'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
StorePreOrderConfigUpdatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
StorePreOrderConfigUpdatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
StorePreOrderConfigUpdatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
StorePreOrderConfigUpdatedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
StorePreOrderConfigUpdatedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
StorePreOrderConfigUpdatedEvent.prototype['IpAddress'] = undefined;






export default StorePreOrderConfigUpdatedEvent;

