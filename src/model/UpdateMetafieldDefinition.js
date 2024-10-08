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

/**
 * The UpdateMetafieldDefinition model module.
 * @module model/UpdateMetafieldDefinition
 * @version 1.0.0
 */
class UpdateMetafieldDefinition {
    /**
     * Constructs a new <code>UpdateMetafieldDefinition</code>.
     * Information to update a {Flipdish.Metafields.PublicModels.V1.MetafieldDefinition}
     * @alias module:model/UpdateMetafieldDefinition
     */
    constructor() { 
        
        UpdateMetafieldDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMetafieldDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMetafieldDefinition} obj Optional instance to populate.
     * @return {module:model/UpdateMetafieldDefinition} The populated <code>UpdateMetafieldDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMetafieldDefinition();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Behaviors')) {
                obj['Behaviors'] = ApiClient.convertToType(data['Behaviors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Field Name
 * @member {String} Name
 */
UpdateMetafieldDefinition.prototype['Name'] = undefined;

/**
 * Field Description
 * @member {String} Description
 */
UpdateMetafieldDefinition.prototype['Description'] = undefined;

/**
 * Enable Metafield Behaviors
 * @member {Array.<module:model/UpdateMetafieldDefinition.BehaviorsEnum>} Behaviors
 */
UpdateMetafieldDefinition.prototype['Behaviors'] = undefined;





/**
 * Allowed values for the <code>Behaviors</code> property.
 * @enum {String}
 * @readonly
 */
UpdateMetafieldDefinition['BehaviorsEnum'] = {

    /**
     * value: "SendToOrder"
     * @const
     */
    "SendToOrder": "SendToOrder",

    /**
     * value: "SendToMenu"
     * @const
     */
    "SendToMenu": "SendToMenu"
};



export default UpdateMetafieldDefinition;

