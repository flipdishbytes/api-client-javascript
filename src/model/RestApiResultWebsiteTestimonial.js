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
    define(['ApiClient', 'model/WebsiteTestimonial'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebsiteTestimonial'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultWebsiteTestimonial = factory(root.Flipdish.ApiClient, root.Flipdish.WebsiteTestimonial);
  }
}(this, function(ApiClient, WebsiteTestimonial) {
  'use strict';

  /**
   * The RestApiResultWebsiteTestimonial model module.
   * @module model/RestApiResultWebsiteTestimonial
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultWebsiteTestimonial</code>.
   * Rest api result
   * @alias module:model/RestApiResultWebsiteTestimonial
   * @class
   * @param Data {module:model/WebsiteTestimonial} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultWebsiteTestimonial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultWebsiteTestimonial} obj Optional instance to populate.
   * @return {module:model/RestApiResultWebsiteTestimonial} The populated <code>RestApiResultWebsiteTestimonial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = WebsiteTestimonial.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/WebsiteTestimonial} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
