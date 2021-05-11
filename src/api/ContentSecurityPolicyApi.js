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
    define(['ApiClient', 'model/CspReportRequest', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CspReportRequest'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.ContentSecurityPolicyApi = factory(root.Flipdish.ApiClient, root.Flipdish.CspReportRequest, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, CspReportRequest, RestApiErrorResult, RestApiForbiddenResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * ContentSecurityPolicy service.
   * @module api/ContentSecurityPolicyApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ContentSecurityPolicyApi. 
   * @alias module:api/ContentSecurityPolicyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contentSecurityPolicyReport operation.
     * @callback module:api/ContentSecurityPolicyApi~contentSecurityPolicyReportCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CspReportRequest} request 
     * @param {module:api/ContentSecurityPolicyApi~contentSecurityPolicyReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.contentSecurityPolicyReport = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling contentSecurityPolicyReport");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1.0/csp/report', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));