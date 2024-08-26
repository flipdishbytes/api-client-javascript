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
import Field from './Field';

/**
 * The FieldGroup model module.
 * @module model/FieldGroup
 * @version 1.0.0
 */
class FieldGroup {
    /**
     * Constructs a new <code>FieldGroup</code>.
     * @alias module:model/FieldGroup
     * @param Name {String} 
     * @param Position {Number} 
     */
    constructor(Name, Position) { 
        
        FieldGroup.initialize(this, Name, Position);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Name, Position) { 
        obj['Name'] = Name;
        obj['Position'] = Position;
    }

    /**
     * Constructs a <code>FieldGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldGroup} obj Optional instance to populate.
     * @return {module:model/FieldGroup} The populated <code>FieldGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldGroup();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Tooltip')) {
                obj['Tooltip'] = ApiClient.convertToType(data['Tooltip'], 'String');
            }
            if (data.hasOwnProperty('Position')) {
                obj['Position'] = ApiClient.convertToType(data['Position'], 'Number');
            }
            if (data.hasOwnProperty('Fields')) {
                obj['Fields'] = ApiClient.convertToType(data['Fields'], [Field]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
FieldGroup.prototype['Name'] = undefined;

/**
 * @member {String} Description
 */
FieldGroup.prototype['Description'] = undefined;

/**
 * @member {String} Tooltip
 */
FieldGroup.prototype['Tooltip'] = undefined;

/**
 * @member {Number} Position
 */
FieldGroup.prototype['Position'] = undefined;

/**
 * @member {Array.<module:model/Field>} Fields
 */
FieldGroup.prototype['Fields'] = undefined;






export default FieldGroup;

