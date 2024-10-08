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
import NutritionInfoItemAddUpdateLabelModel from './NutritionInfoItemAddUpdateLabelModel';

/**
 * The ItemNutritionInfoAddUpdateModel model module.
 * @module model/ItemNutritionInfoAddUpdateModel
 * @version 1.0.0
 */
class ItemNutritionInfoAddUpdateModel {
    /**
     * Constructs a new <code>ItemNutritionInfoAddUpdateModel</code>.
     * @alias module:model/ItemNutritionInfoAddUpdateModel
     */
    constructor() { 
        
        ItemNutritionInfoAddUpdateModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemNutritionInfoAddUpdateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemNutritionInfoAddUpdateModel} obj Optional instance to populate.
     * @return {module:model/ItemNutritionInfoAddUpdateModel} The populated <code>ItemNutritionInfoAddUpdateModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemNutritionInfoAddUpdateModel();

            if (data.hasOwnProperty('Labels')) {
                obj['Labels'] = ApiClient.convertToType(data['Labels'], [NutritionInfoItemAddUpdateLabelModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/NutritionInfoItemAddUpdateLabelModel>} Labels
 */
ItemNutritionInfoAddUpdateModel.prototype['Labels'] = undefined;






export default ItemNutritionInfoAddUpdateModel;

