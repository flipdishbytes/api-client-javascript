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
    root.Flipdish.LastPaymentError = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LastPaymentError model module.
   * @module model/LastPaymentError
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LastPaymentError</code>.
   * List's the issues with the last failed payment intent
   * @alias module:model/LastPaymentError
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LastPaymentError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LastPaymentError} obj Optional instance to populate.
   * @return {module:model/LastPaymentError} The populated <code>LastPaymentError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code'))
        obj.Code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('DeclineCode'))
        obj.DeclineCode = ApiClient.convertToType(data['DeclineCode'], 'String');
      if (data.hasOwnProperty('Message'))
        obj.Message = ApiClient.convertToType(data['Message'], 'String');
    }
    return obj;
  }

  /**
   * For some errors that could be handled programmatically, a short string indicating the error code reported.
   * @member {String} Code
   */
  exports.prototype.Code = undefined;

  /**
   * For card errors resulting from a card issuer decline, a short string indicating the card issuer’s reason for the decline if they provide one.
   * @member {String} DeclineCode
   */
  exports.prototype.DeclineCode = undefined;

  /**
   * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
   * @member {String} Message
   */
  exports.prototype.Message = undefined;


  return exports;

}));
