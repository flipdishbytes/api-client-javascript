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
    define(['ApiClient', 'model/WebsiteImage', 'model/WebsiteTestimonial'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebsiteImage'), require('./WebsiteTestimonial'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.IndexPage = factory(root.Flipdish.ApiClient, root.Flipdish.WebsiteImage, root.Flipdish.WebsiteTestimonial);
  }
}(this, function(ApiClient, WebsiteImage, WebsiteTestimonial) {
  'use strict';

  /**
   * The IndexPage model module.
   * @module model/IndexPage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IndexPage</code>.
   * Index Page
   * @alias module:model/IndexPage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IndexPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndexPage} obj Optional instance to populate.
   * @return {module:model/IndexPage} The populated <code>IndexPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Testimonials'))
        obj.Testimonials = ApiClient.convertToType(data['Testimonials'], [WebsiteTestimonial]);
      if (data.hasOwnProperty('Images'))
        obj.Images = ApiClient.convertToType(data['Images'], [WebsiteImage]);
      if (data.hasOwnProperty('AboutSectionEnabled'))
        obj.AboutSectionEnabled = ApiClient.convertToType(data['AboutSectionEnabled'], 'Boolean');
      if (data.hasOwnProperty('AboutSectionTitle'))
        obj.AboutSectionTitle = ApiClient.convertToType(data['AboutSectionTitle'], 'String');
      if (data.hasOwnProperty('AboutSectionSubtitle'))
        obj.AboutSectionSubtitle = ApiClient.convertToType(data['AboutSectionSubtitle'], 'String');
      if (data.hasOwnProperty('AboutSectionLeftTitle'))
        obj.AboutSectionLeftTitle = ApiClient.convertToType(data['AboutSectionLeftTitle'], 'String');
      if (data.hasOwnProperty('AboutSectionLeftBody'))
        obj.AboutSectionLeftBody = ApiClient.convertToType(data['AboutSectionLeftBody'], 'String');
      if (data.hasOwnProperty('AboutSectionRightTitle'))
        obj.AboutSectionRightTitle = ApiClient.convertToType(data['AboutSectionRightTitle'], 'String');
      if (data.hasOwnProperty('AboutSectionRightBody'))
        obj.AboutSectionRightBody = ApiClient.convertToType(data['AboutSectionRightBody'], 'String');
      if (data.hasOwnProperty('OpeningHoursEnabled'))
        obj.OpeningHoursEnabled = ApiClient.convertToType(data['OpeningHoursEnabled'], 'Boolean');
      if (data.hasOwnProperty('MenuPreviewEnabled'))
        obj.MenuPreviewEnabled = ApiClient.convertToType(data['MenuPreviewEnabled'], 'Boolean');
      if (data.hasOwnProperty('GalleryEnabled'))
        obj.GalleryEnabled = ApiClient.convertToType(data['GalleryEnabled'], 'Boolean');
      if (data.hasOwnProperty('TestimonialsEnabled'))
        obj.TestimonialsEnabled = ApiClient.convertToType(data['TestimonialsEnabled'], 'Boolean');
      if (data.hasOwnProperty('ContactFormEnabled'))
        obj.ContactFormEnabled = ApiClient.convertToType(data['ContactFormEnabled'], 'Boolean');
      if (data.hasOwnProperty('ContactFormEmail'))
        obj.ContactFormEmail = ApiClient.convertToType(data['ContactFormEmail'], 'String');
      if (data.hasOwnProperty('MapEnabled'))
        obj.MapEnabled = ApiClient.convertToType(data['MapEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Testimonials
   * @member {Array.<module:model/WebsiteTestimonial>} Testimonials
   */
  exports.prototype.Testimonials = undefined;

  /**
   * Images
   * @member {Array.<module:model/WebsiteImage>} Images
   */
  exports.prototype.Images = undefined;

  /**
   * About section enabled
   * @member {Boolean} AboutSectionEnabled
   */
  exports.prototype.AboutSectionEnabled = undefined;

  /**
   * About section title
   * @member {String} AboutSectionTitle
   */
  exports.prototype.AboutSectionTitle = undefined;

  /**
   * About section sub-title
   * @member {String} AboutSectionSubtitle
   */
  exports.prototype.AboutSectionSubtitle = undefined;

  /**
   * About section title left
   * @member {String} AboutSectionLeftTitle
   */
  exports.prototype.AboutSectionLeftTitle = undefined;

  /**
   * About section text left
   * @member {String} AboutSectionLeftBody
   */
  exports.prototype.AboutSectionLeftBody = undefined;

  /**
   * About section title right
   * @member {String} AboutSectionRightTitle
   */
  exports.prototype.AboutSectionRightTitle = undefined;

  /**
   * About section text right
   * @member {String} AboutSectionRightBody
   */
  exports.prototype.AboutSectionRightBody = undefined;

  /**
   * Opening hours section Enabled
   * @member {Boolean} OpeningHoursEnabled
   */
  exports.prototype.OpeningHoursEnabled = undefined;

  /**
   * Menu Preview section Enabled
   * @member {Boolean} MenuPreviewEnabled
   */
  exports.prototype.MenuPreviewEnabled = undefined;

  /**
   * Gallery section enabled
   * @member {Boolean} GalleryEnabled
   */
  exports.prototype.GalleryEnabled = undefined;

  /**
   * Testimonials section Enabled
   * @member {Boolean} TestimonialsEnabled
   */
  exports.prototype.TestimonialsEnabled = undefined;

  /**
   * Contact Form section Enabled
   * @member {Boolean} ContactFormEnabled
   */
  exports.prototype.ContactFormEnabled = undefined;

  /**
   * Contact Form Email
   * @member {String} ContactFormEmail
   */
  exports.prototype.ContactFormEmail = undefined;

  /**
   * Map section Enabled
   * @member {Boolean} MapEnabled
   */
  exports.prototype.MapEnabled = undefined;


  return exports;

}));
