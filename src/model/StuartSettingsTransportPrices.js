/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.StuartSettingsTransportPrices = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StuartSettingsTransportPrices model module.
   * @module model/StuartSettingsTransportPrices
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StuartSettingsTransportPrices</code>.
   * If the order exceeds are certain amount this configuration will determine a new vehicle type
   * @alias module:model/StuartSettingsTransportPrices
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StuartSettingsTransportPrices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StuartSettingsTransportPrices} obj Optional instance to populate.
   * @return {module:model/StuartSettingsTransportPrices} The populated <code>StuartSettingsTransportPrices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Bike'))
        obj.Bike = ApiClient.convertToType(data['Bike'], 'Number');
      if (data.hasOwnProperty('Cargobike'))
        obj.Cargobike = ApiClient.convertToType(data['Cargobike'], 'Number');
      if (data.hasOwnProperty('Cargobikexl'))
        obj.Cargobikexl = ApiClient.convertToType(data['Cargobikexl'], 'Number');
      if (data.hasOwnProperty('Motorbike'))
        obj.Motorbike = ApiClient.convertToType(data['Motorbike'], 'Number');
      if (data.hasOwnProperty('Motorbikexl'))
        obj.Motorbikexl = ApiClient.convertToType(data['Motorbikexl'], 'Number');
      if (data.hasOwnProperty('Car'))
        obj.Car = ApiClient.convertToType(data['Car'], 'Number');
      if (data.hasOwnProperty('Van'))
        obj.Van = ApiClient.convertToType(data['Van'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} Bike
   */
  exports.prototype.Bike = undefined;

  /**
   * @member {Number} Cargobike
   */
  exports.prototype.Cargobike = undefined;

  /**
   * @member {Number} Cargobikexl
   */
  exports.prototype.Cargobikexl = undefined;

  /**
   * @member {Number} Motorbike
   */
  exports.prototype.Motorbike = undefined;

  /**
   * @member {Number} Motorbikexl
   */
  exports.prototype.Motorbikexl = undefined;

  /**
   * @member {Number} Car
   */
  exports.prototype.Car = undefined;

  /**
   * @member {Number} Van
   */
  exports.prototype.Van = undefined;


  return exports;

}));
