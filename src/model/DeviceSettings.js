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
 * The DeviceSettings model module.
 * @module model/DeviceSettings
 * @version 1.0.0
 */
class DeviceSettings {
    /**
     * Constructs a new <code>DeviceSettings</code>.
     * Device settings for Hydra
     * @alias module:model/DeviceSettings
     * @param Volume {Number} Gets or sets the device volume
     * @param FontSize {Number} Gets or sets the font size used on the device
     * @param Brightness {Number} Gets or sets the display brightness on the device
     */
    constructor(Volume, FontSize, Brightness) { 
        
        DeviceSettings.initialize(this, Volume, FontSize, Brightness);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Volume, FontSize, Brightness) { 
        obj['Volume'] = Volume;
        obj['FontSize'] = FontSize;
        obj['Brightness'] = Brightness;
    }

    /**
     * Constructs a <code>DeviceSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceSettings} obj Optional instance to populate.
     * @return {module:model/DeviceSettings} The populated <code>DeviceSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceSettings();

            if (data.hasOwnProperty('Volume')) {
                obj['Volume'] = ApiClient.convertToType(data['Volume'], 'Number');
            }
            if (data.hasOwnProperty('FontSize')) {
                obj['FontSize'] = ApiClient.convertToType(data['FontSize'], 'Number');
            }
            if (data.hasOwnProperty('Brightness')) {
                obj['Brightness'] = ApiClient.convertToType(data['Brightness'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the device volume
 * @member {Number} Volume
 */
DeviceSettings.prototype['Volume'] = undefined;

/**
 * Gets or sets the font size used on the device
 * @member {Number} FontSize
 */
DeviceSettings.prototype['FontSize'] = undefined;

/**
 * Gets or sets the display brightness on the device
 * @member {Number} Brightness
 */
DeviceSettings.prototype['Brightness'] = undefined;






export default DeviceSettings;

