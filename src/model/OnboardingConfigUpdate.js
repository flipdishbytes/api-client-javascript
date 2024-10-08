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
 * The OnboardingConfigUpdate model module.
 * @module model/OnboardingConfigUpdate
 * @version 1.0.0
 */
class OnboardingConfigUpdate {
    /**
     * Constructs a new <code>OnboardingConfigUpdate</code>.
     * Model for updating the onboarding config
     * @alias module:model/OnboardingConfigUpdate
     */
    constructor() { 
        
        OnboardingConfigUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OnboardingConfigUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnboardingConfigUpdate} obj Optional instance to populate.
     * @return {module:model/OnboardingConfigUpdate} The populated <code>OnboardingConfigUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnboardingConfigUpdate();

            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('IsWelcomeScreenEnabled')) {
                obj['IsWelcomeScreenEnabled'] = ApiClient.convertToType(data['IsWelcomeScreenEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ConfigType')) {
                obj['ConfigType'] = ApiClient.convertToType(data['ConfigType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets whether onboarding is enabled
 * @member {Boolean} IsEnabled
 */
OnboardingConfigUpdate.prototype['IsEnabled'] = undefined;

/**
 * Gets or sets whether welcome screen is enabled
 * @member {Boolean} IsWelcomeScreenEnabled
 */
OnboardingConfigUpdate.prototype['IsWelcomeScreenEnabled'] = undefined;

/**
 * Onboarding config type
 * @member {module:model/OnboardingConfigUpdate.ConfigTypeEnum} ConfigType
 */
OnboardingConfigUpdate.prototype['ConfigType'] = undefined;





/**
 * Allowed values for the <code>ConfigType</code> property.
 * @enum {String}
 * @readonly
 */
OnboardingConfigUpdate['ConfigTypeEnum'] = {

    /**
     * value: "Tutorial"
     * @const
     */
    "Tutorial": "Tutorial",

    /**
     * value: "OnboardingWizard"
     * @const
     */
    "OnboardingWizard": "OnboardingWizard"
};



export default OnboardingConfigUpdate;

