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
import BankAccount from './BankAccount';
import UserEventInfo from './UserEventInfo';

/**
 * The BankAccountAssignedEvent model module.
 * @module model/BankAccountAssignedEvent
 * @version 1.0.0
 */
class BankAccountAssignedEvent {
    /**
     * Constructs a new <code>BankAccountAssignedEvent</code>.
     * 
     * @alias module:model/BankAccountAssignedEvent
     */
    constructor() { 
        
        BankAccountAssignedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankAccountAssignedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccountAssignedEvent} obj Optional instance to populate.
     * @return {module:model/BankAccountAssignedEvent} The populated <code>BankAccountAssignedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccountAssignedEvent();

            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'String');
            }
            if (data.hasOwnProperty('BankAccount')) {
                obj['BankAccount'] = BankAccount.constructFromObject(data['BankAccount']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Organisation Id
 * @member {String} OrgId
 */
BankAccountAssignedEvent.prototype['OrgId'] = undefined;

/**
 * @member {module:model/BankAccount} BankAccount
 */
BankAccountAssignedEvent.prototype['BankAccount'] = undefined;

/**
 * Event description
 * @member {String} Description
 */
BankAccountAssignedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
BankAccountAssignedEvent.prototype['User'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
BankAccountAssignedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
BankAccountAssignedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
BankAccountAssignedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
BankAccountAssignedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
BankAccountAssignedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
BankAccountAssignedEvent.prototype['IpAddress'] = undefined;






export default BankAccountAssignedEvent;

