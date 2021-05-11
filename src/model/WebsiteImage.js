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
    root.Flipdish.WebsiteImage = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebsiteImage model module.
   * @module model/WebsiteImage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebsiteImage</code>.
   * Represents a website image
   * @alias module:model/WebsiteImage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebsiteImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsiteImage} obj Optional instance to populate.
   * @return {module:model/WebsiteImage} The populated <code>WebsiteImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ImageId'))
        obj.ImageId = ApiClient.convertToType(data['ImageId'], 'Number');
      if (data.hasOwnProperty('ImageLocation'))
        obj.ImageLocation = ApiClient.convertToType(data['ImageLocation'], 'String');
      if (data.hasOwnProperty('ImageUrl'))
        obj.ImageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
    }
    return obj;
  }

  /**
   * Represents the id of the image
   * @member {Number} ImageId
   */
  exports.prototype.ImageId = undefined;

  /**
   * Represents the location of the image
   * @member {module:model/WebsiteImage.ImageLocationEnum} ImageLocation
   */
  exports.prototype.ImageLocation = undefined;

  /**
   * Represents the image url
   * @member {String} ImageUrl
   */
  exports.prototype.ImageUrl = undefined;



  /**
   * Allowed values for the <code>ImageLocation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ImageLocationEnum = {
    /**
     * value: "IndexHeader"
     * @const
     */
    IndexHeader: "IndexHeader",

    /**
     * value: "IndexAboutSectionLeft"
     * @const
     */
    IndexAboutSectionLeft: "IndexAboutSectionLeft",

    /**
     * value: "IndexAboutSectionRight"
     * @const
     */
    IndexAboutSectionRight: "IndexAboutSectionRight",

    /**
     * value: "IndexGallery"
     * @const
     */
    IndexGallery: "IndexGallery",

    /**
     * value: "IndexOpeningHoursHeader"
     * @const
     */
    IndexOpeningHoursHeader: "IndexOpeningHoursHeader",

    /**
     * value: "IndexTestimonialsHeader"
     * @const
     */
    IndexTestimonialsHeader: "IndexTestimonialsHeader"
  };

  return exports;

}));