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
import Printer from './Printer';
import UserEventInfo from './UserEventInfo';

/**
 * The PrinterUnassignedFromStoreEvent model module.
 * @module model/PrinterUnassignedFromStoreEvent
 * @version 1.0.0
 */
class PrinterUnassignedFromStoreEvent {
    /**
     * Constructs a new <code>PrinterUnassignedFromStoreEvent</code>.
     * Printer assigned from store event
     * @alias module:model/PrinterUnassignedFromStoreEvent
     */
    constructor() { 
        
        PrinterUnassignedFromStoreEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrinterUnassignedFromStoreEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrinterUnassignedFromStoreEvent} obj Optional instance to populate.
     * @return {module:model/PrinterUnassignedFromStoreEvent} The populated <code>PrinterUnassignedFromStoreEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrinterUnassignedFromStoreEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
            if (data.hasOwnProperty('Printer')) {
                obj['Printer'] = Printer.constructFromObject(data['Printer']);
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
PrinterUnassignedFromStoreEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
PrinterUnassignedFromStoreEvent.prototype['Description'] = undefined;

/**
 * Store Id
 * @member {Number} StoreId
 */
PrinterUnassignedFromStoreEvent.prototype['StoreId'] = undefined;

/**
 * Store group Id
 * @member {Number} StoreGroupId
 */
PrinterUnassignedFromStoreEvent.prototype['StoreGroupId'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
PrinterUnassignedFromStoreEvent.prototype['User'] = undefined;

/**
 * @member {module:model/Printer} Printer
 */
PrinterUnassignedFromStoreEvent.prototype['Printer'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
PrinterUnassignedFromStoreEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
PrinterUnassignedFromStoreEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
PrinterUnassignedFromStoreEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
PrinterUnassignedFromStoreEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
PrinterUnassignedFromStoreEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
PrinterUnassignedFromStoreEvent.prototype['IpAddress'] = undefined;






export default PrinterUnassignedFromStoreEvent;

