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
 * The UpdateTipConfiguration model module.
 * @module model/UpdateTipConfiguration
 * @version 1.0.0
 */
class UpdateTipConfiguration {
    /**
     * Constructs a new <code>UpdateTipConfiguration</code>.
     * Describes the configuration of tipping
     * @alias module:model/UpdateTipConfiguration
     */
    constructor() { 
        
        UpdateTipConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTipConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTipConfiguration} obj Optional instance to populate.
     * @return {module:model/UpdateTipConfiguration} The populated <code>UpdateTipConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTipConfiguration();

            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('AllowCustomTips')) {
                obj['AllowCustomTips'] = ApiClient.convertToType(data['AllowCustomTips'], 'Boolean');
            }
            if (data.hasOwnProperty('AllowRoundUp')) {
                obj['AllowRoundUp'] = ApiClient.convertToType(data['AllowRoundUp'], 'Boolean');
            }
            if (data.hasOwnProperty('AllowEmojis')) {
                obj['AllowEmojis'] = ApiClient.convertToType(data['AllowEmojis'], 'Boolean');
            }
            if (data.hasOwnProperty('Percentages')) {
                obj['Percentages'] = ApiClient.convertToType(data['Percentages'], ['Number']);
            }
            if (data.hasOwnProperty('DefaultPercentage')) {
                obj['DefaultPercentage'] = ApiClient.convertToType(data['DefaultPercentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Are tips enabled?
 * @member {Boolean} IsEnabled
 */
UpdateTipConfiguration.prototype['IsEnabled'] = undefined;

/**
 * Are custom tips allowed?
 * @member {Boolean} AllowCustomTips
 */
UpdateTipConfiguration.prototype['AllowCustomTips'] = undefined;

/**
 * Is round up allowed?
 * @member {Boolean} AllowRoundUp
 */
UpdateTipConfiguration.prototype['AllowRoundUp'] = undefined;

/**
 * Are emojis allowed?
 * @member {Boolean} AllowEmojis
 */
UpdateTipConfiguration.prototype['AllowEmojis'] = undefined;

/**
 * Ordered list of tip breakpoints (smallest -&gt; largest)
 * @member {Array.<Number>} Percentages
 */
UpdateTipConfiguration.prototype['Percentages'] = undefined;

/**
 * Defines a default percentage, it must be in the list of Percentages
 * @member {Number} DefaultPercentage
 */
UpdateTipConfiguration.prototype['DefaultPercentage'] = undefined;






export default UpdateTipConfiguration;

