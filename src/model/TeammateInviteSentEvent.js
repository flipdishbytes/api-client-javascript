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
import Teammate from './Teammate';
import UserEventInfo from './UserEventInfo';

/**
 * The TeammateInviteSentEvent model module.
 * @module model/TeammateInviteSentEvent
 * @version 1.0.0
 */
class TeammateInviteSentEvent {
    /**
     * Constructs a new <code>TeammateInviteSentEvent</code>.
     * 
     * @alias module:model/TeammateInviteSentEvent
     */
    constructor() { 
        
        TeammateInviteSentEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeammateInviteSentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeammateInviteSentEvent} obj Optional instance to populate.
     * @return {module:model/TeammateInviteSentEvent} The populated <code>TeammateInviteSentEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeammateInviteSentEvent();

            if (data.hasOwnProperty('Teammate')) {
                obj['Teammate'] = Teammate.constructFromObject(data['Teammate']);
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
 * @member {module:model/Teammate} Teammate
 */
TeammateInviteSentEvent.prototype['Teammate'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
TeammateInviteSentEvent.prototype['User'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
TeammateInviteSentEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
TeammateInviteSentEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
TeammateInviteSentEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
TeammateInviteSentEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
TeammateInviteSentEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
TeammateInviteSentEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
TeammateInviteSentEvent.prototype['IpAddress'] = undefined;






export default TeammateInviteSentEvent;

