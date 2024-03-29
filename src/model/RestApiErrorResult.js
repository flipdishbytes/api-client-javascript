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
    define(['ApiClient', 'model/ValidationErrorResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidationErrorResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiErrorResult = factory(root.Flipdish.ApiClient, root.Flipdish.ValidationErrorResult);
  }
}(this, function(ApiClient, ValidationErrorResult) {
  'use strict';

  /**
   * The RestApiErrorResult model module.
   * @module model/RestApiErrorResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiErrorResult</code>.
   * Rest api error result
   * @alias module:model/RestApiErrorResult
   * @class
   * @param Message {String} Error message
   */
  var exports = function(Message) {
    this.Message = Message;
  };

  /**
   * Constructs a <code>RestApiErrorResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiErrorResult} obj Optional instance to populate.
   * @return {module:model/RestApiErrorResult} The populated <code>RestApiErrorResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Message'))
        obj.Message = ApiClient.convertToType(data['Message'], 'String');
      if (data.hasOwnProperty('ErrorCode'))
        obj.ErrorCode = ApiClient.convertToType(data['ErrorCode'], 'Number');
      if (data.hasOwnProperty('StackTrace'))
        obj.StackTrace = ApiClient.convertToType(data['StackTrace'], 'String');
      if (data.hasOwnProperty('Errors'))
        obj.Errors = ApiClient.convertToType(data['Errors'], [ValidationErrorResult]);
    }
    return obj;
  }

  /**
   * Error message
   * @member {String} Message
   */
  exports.prototype.Message = undefined;

  /**
   * Error code
   * @member {Number} ErrorCode
   */
  exports.prototype.ErrorCode = undefined;

  /**
   * Stack trace
   * @member {String} StackTrace
   */
  exports.prototype.StackTrace = undefined;

  /**
   * List of errors grouped by field name
   * @member {Array.<module:model/ValidationErrorResult>} Errors
   */
  exports.prototype.Errors = undefined;


  return exports;

}));
