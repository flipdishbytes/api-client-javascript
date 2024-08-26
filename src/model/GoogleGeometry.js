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
    define(['ApiClient', 'model/GoogleLocation', 'model/GoogleViewport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoogleLocation'), require('./GoogleViewport'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.GoogleGeometry = factory(root.Flipdish.ApiClient, root.Flipdish.GoogleLocation, root.Flipdish.GoogleViewport);
  }
}(this, function(ApiClient, GoogleLocation, GoogleViewport) {
  'use strict';

  /**
   * The GoogleGeometry model module.
   * @module model/GoogleGeometry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoogleGeometry</code>.
   * @alias module:model/GoogleGeometry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GoogleGeometry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoogleGeometry} obj Optional instance to populate.
   * @return {module:model/GoogleGeometry} The populated <code>GoogleGeometry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Location'))
        obj.Location = GoogleLocation.constructFromObject(data['Location']);
      if (data.hasOwnProperty('Location_type'))
        obj.Location_type = ApiClient.convertToType(data['Location_type'], 'String');
      if (data.hasOwnProperty('Viewport'))
        obj.Viewport = GoogleViewport.constructFromObject(data['Viewport']);
    }
    return obj;
  }

  /**
   * @member {module:model/GoogleLocation} Location
   */
  exports.prototype.Location = undefined;

  /**
   * @member {String} Location_type
   */
  exports.prototype.Location_type = undefined;

  /**
   * @member {module:model/GoogleViewport} Viewport
   */
  exports.prototype.Viewport = undefined;


  return exports;

}));
