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
import NextStatusWithOrderType from './NextStatusWithOrderType';

/**
 * The FulfillmentStatusConfigurationItem model module.
 * @module model/FulfillmentStatusConfigurationItem
 * @version 1.0.0
 */
class FulfillmentStatusConfigurationItem {
    /**
     * Constructs a new <code>FulfillmentStatusConfigurationItem</code>.
     * Fulfillment Status Item
     * @alias module:model/FulfillmentStatusConfigurationItem
     */
    constructor() { 
        
        FulfillmentStatusConfigurationItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FulfillmentStatusConfigurationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FulfillmentStatusConfigurationItem} obj Optional instance to populate.
     * @return {module:model/FulfillmentStatusConfigurationItem} The populated <code>FulfillmentStatusConfigurationItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentStatusConfigurationItem();

            if (data.hasOwnProperty('StatusId')) {
                obj['StatusId'] = ApiClient.convertToType(data['StatusId'], 'String');
            }
            if (data.hasOwnProperty('StatusName')) {
                obj['StatusName'] = ApiClient.convertToType(data['StatusName'], 'String');
            }
            if (data.hasOwnProperty('Enabled')) {
                obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('DisplayName')) {
                obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
            if (data.hasOwnProperty('PublicDescription')) {
                obj['PublicDescription'] = ApiClient.convertToType(data['PublicDescription'], 'String');
            }
            if (data.hasOwnProperty('Internal')) {
                obj['Internal'] = ApiClient.convertToType(data['Internal'], 'Boolean');
            }
            if (data.hasOwnProperty('NextStatuses')) {
                obj['NextStatuses'] = ApiClient.convertToType(data['NextStatuses'], ['String']);
            }
            if (data.hasOwnProperty('DefaultNextStatus')) {
                obj['DefaultNextStatus'] = ApiClient.convertToType(data['DefaultNextStatus'], [NextStatusWithOrderType]);
            }
            if (data.hasOwnProperty('ChangeType')) {
                obj['ChangeType'] = ApiClient.convertToType(data['ChangeType'], 'String');
            }
            if (data.hasOwnProperty('IncludeInReports')) {
                obj['IncludeInReports'] = ApiClient.convertToType(data['IncludeInReports'], 'Boolean');
            }
            if (data.hasOwnProperty('IsCustom')) {
                obj['IsCustom'] = ApiClient.convertToType(data['IsCustom'], 'Boolean');
            }
            if (data.hasOwnProperty('OrderTypes')) {
                obj['OrderTypes'] = ApiClient.convertToType(data['OrderTypes'], ['String']);
            }
            if (data.hasOwnProperty('Communication')) {
                obj['Communication'] = ApiClient.convertToType(data['Communication'], 'Boolean');
            }
            if (data.hasOwnProperty('Image')) {
                obj['Image'] = ApiClient.convertToType(data['Image'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status Id (no whitespaces)
 * @member {String} StatusId
 */
FulfillmentStatusConfigurationItem.prototype['StatusId'] = undefined;

/**
 * Status name
 * @member {String} StatusName
 */
FulfillmentStatusConfigurationItem.prototype['StatusName'] = undefined;

/**
 * Is status enabled
 * @member {Boolean} Enabled
 */
FulfillmentStatusConfigurationItem.prototype['Enabled'] = undefined;

/**
 * The short status string that is displayed to users in apps, portal. If empty then Order Status Name is displayed instead
 * @member {String} DisplayName
 */
FulfillmentStatusConfigurationItem.prototype['DisplayName'] = undefined;

/**
 * Icon/Image that represents that status visual
 * @member {String} Icon
 */
FulfillmentStatusConfigurationItem.prototype['Icon'] = undefined;

/**
 * A string which could be used in notification templates with a placeholder (SMS, email, push, web page with status)
 * @member {String} PublicDescription
 */
FulfillmentStatusConfigurationItem.prototype['PublicDescription'] = undefined;

/**
 * Is internal state (internal states not shown to customers)
 * @member {Boolean} Internal
 */
FulfillmentStatusConfigurationItem.prototype['Internal'] = undefined;

/**
 * list of statuses that this status can move to (can be back or forth)
 * @member {Array.<String>} NextStatuses
 */
FulfillmentStatusConfigurationItem.prototype['NextStatuses'] = undefined;

/**
 * The default next status (on a dropdown or quick button on terminal or portal)
 * @member {Array.<module:model/NextStatusWithOrderType>} DefaultNextStatus
 */
FulfillmentStatusConfigurationItem.prototype['DefaultNextStatus'] = undefined;

/**
 * How will state change (manually or automated, including timed)
 * @member {module:model/FulfillmentStatusConfigurationItem.ChangeTypeEnum} ChangeType
 */
FulfillmentStatusConfigurationItem.prototype['ChangeType'] = undefined;

/**
 * Include in reports
 * @member {Boolean} IncludeInReports
 */
FulfillmentStatusConfigurationItem.prototype['IncludeInReports'] = undefined;

/**
 * Is custom state. If not, then it's a system state
 * @member {Boolean} IsCustom
 */
FulfillmentStatusConfigurationItem.prototype['IsCustom'] = undefined;

/**
 * If empty then applies to all ordertypes, otherwise a list of order types this state applies to
 * @member {Array.<module:model/FulfillmentStatusConfigurationItem.OrderTypesEnum>} OrderTypes
 */
FulfillmentStatusConfigurationItem.prototype['OrderTypes'] = undefined;

/**
 * Whether state should fire off a notification to the customer
 * @member {Boolean} Communication
 */
FulfillmentStatusConfigurationItem.prototype['Communication'] = undefined;

/**
 * Image (image filename, relative, not absolute URL)
 * @member {String} Image
 */
FulfillmentStatusConfigurationItem.prototype['Image'] = undefined;





/**
 * Allowed values for the <code>ChangeType</code> property.
 * @enum {String}
 * @readonly
 */
FulfillmentStatusConfigurationItem['ChangeTypeEnum'] = {

    /**
     * value: "Manual"
     * @const
     */
    "Manual": "Manual",

    /**
     * value: "Automated"
     * @const
     */
    "Automated": "Automated",

    /**
     * value: "Integrated"
     * @const
     */
    "Integrated": "Integrated"
};


/**
 * Allowed values for the <code>OrderTypes</code> property.
 * @enum {String}
 * @readonly
 */
FulfillmentStatusConfigurationItem['OrderTypesEnum'] = {

    /**
     * value: "All"
     * @const
     */
    "All": "All",

    /**
     * value: "Delivery"
     * @const
     */
    "Delivery": "Delivery",

    /**
     * value: "Collection"
     * @const
     */
    "Collection": "Collection",

    /**
     * value: "DineIn"
     * @const
     */
    "DineIn": "DineIn"
};



export default FulfillmentStatusConfigurationItem;

