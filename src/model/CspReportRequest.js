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
    define(['ApiClient', 'model/CspReport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CspReport'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CspReportRequest = factory(root.Flipdish.ApiClient, root.Flipdish.CspReport);
  }
}(this, function(ApiClient, CspReport) {
  'use strict';

  /**
   * The CspReportRequest model module.
   * @module model/CspReportRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CspReportRequest</code>.
   * @alias module:model/CspReportRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CspReportRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CspReportRequest} obj Optional instance to populate.
   * @return {module:model/CspReportRequest} The populated <code>CspReportRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Csp-report'))
        obj.Csp_report = CspReport.constructFromObject(data['Csp-report']);
    }
    return obj;
  }

  /**
   * @member {module:model/CspReport} Csp_report
   */
  exports.prototype.Csp_report = undefined;


  return exports;

}));
