/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CustomerCreateModel = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomerCreateModel model module.
   * @module model/CustomerCreateModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomerCreateModel</code>.
   * Defines a customer create model
   * @alias module:model/CustomerCreateModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomerCreateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerCreateModel} obj Optional instance to populate.
   * @return {module:model/CustomerCreateModel} The populated <code>CustomerCreateModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PhoneNumber'))
        obj.PhoneNumber = ApiClient.convertToType(data['PhoneNumber'], 'String');
      if (data.hasOwnProperty('AppType'))
        obj.AppType = ApiClient.convertToType(data['AppType'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
    }
    return obj;
  }

  /**
   * Customer Phone Number
   * @member {String} PhoneNumber
   */
  exports.prototype.PhoneNumber = undefined;

  /**
   * Customer AppType
   * @member {module:model/CustomerCreateModel.AppTypeEnum} AppType
   */
  exports.prototype.AppType = undefined;

  /**
   * Customer Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;



  /**
   * Allowed values for the <code>AppType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppTypeEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Ios"
     * @const
     */
    Ios: "Ios",

    /**
     * value: "Android"
     * @const
     */
    Android: "Android",

    /**
     * value: "Web"
     * @const
     */
    Web: "Web",

    /**
     * value: "Kiosk"
     * @const
     */
    Kiosk: "Kiosk",

    /**
     * value: "Pos"
     * @const
     */
    Pos: "Pos",

    /**
     * value: "TelephoneCall"
     * @const
     */
    TelephoneCall: "TelephoneCall",

    /**
     * value: "Sms"
     * @const
     */
    Sms: "Sms",

    /**
     * value: "PwaAndroid"
     * @const
     */
    PwaAndroid: "PwaAndroid",

    /**
     * value: "PwaIos"
     * @const
     */
    PwaIos: "PwaIos",

    /**
     * value: "Google"
     * @const
     */
    Google: "Google"
  };

  return exports;

}));