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
    define(['ApiClient', 'model/AppConfigUpdateModel', 'model/Language', 'model/RestApiArrayResultSupportedCountry', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiPaginationResultApp', 'model/RestApiResultApp', 'model/RestApiResultAppCompliance', 'model/RestApiResultDnsRecordInformation', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppConfigUpdateModel'), require('../model/Language'), require('../model/RestApiArrayResultSupportedCountry'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiPaginationResultApp'), require('../model/RestApiResultApp'), require('../model/RestApiResultAppCompliance'), require('../model/RestApiResultDnsRecordInformation'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.AppsApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.AppConfigUpdateModel, root.FlipdishOpenApiV10.Language, root.FlipdishOpenApiV10.RestApiArrayResultSupportedCountry, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiPaginationResultApp, root.FlipdishOpenApiV10.RestApiResultApp, root.FlipdishOpenApiV10.RestApiResultAppCompliance, root.FlipdishOpenApiV10.RestApiResultDnsRecordInformation, root.FlipdishOpenApiV10.RestApiStringResult, root.FlipdishOpenApiV10.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, AppConfigUpdateModel, Language, RestApiArrayResultSupportedCountry, RestApiErrorResult, RestApiForbiddenResult, RestApiPaginationResultApp, RestApiResultApp, RestApiResultAppCompliance, RestApiResultDnsRecordInformation, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version v1.0
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getApp operation.
     * @callback module:api/AppsApi~getAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the application configuration
     * @param {String} appId Application identifier
     * @param {module:api/AppsApi~getAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultApp}
     */
    this.getApp = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getApp");
      }


      var pathParams = {
        'appId': appId
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiResultApp;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppHostnameStatus operation.
     * @callback module:api/AppsApi~getAppHostnameStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultDnsRecordInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the application hostname DNS delegation states for A and CNAME records.
     * A domain might be ready but still need 10 minutes to work properly because of HAProxy.
     * @param {String} appId Application identifier.
     * @param {module:api/AppsApi~getAppHostnameStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultDnsRecordInformation}
     */
    this.getAppHostnameStatus = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAppHostnameStatus");
      }


      var pathParams = {
        'appId': appId
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiResultDnsRecordInformation;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/hostnamestatus', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApps operation.
     * @callback module:api/AppsApi~getAppsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Apps
     * @param {Object} opts Optional parameters
     * @param {String} opts.nameFilter 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/AppsApi~getAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultApp}
     */
    this.getApps = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'nameFilter': opts['nameFilter'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiPaginationResultApp;

      return this.apiClient.callApi(
        '/api/v1.0/apps', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompliance operation.
     * @callback module:api/AppsApi~getComplianceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppCompliance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the application compliance configuration
     * @param {String} appId Application identifier
     * @param {module:api/AppsApi~getComplianceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppCompliance}
     */
    this.getCompliance = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCompliance");
      }


      var pathParams = {
        'appId': appId
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiResultAppCompliance;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/compliance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPanaceaVanityUrl operation.
     * @callback module:api/AppsApi~getPanaceaVanityUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get panacea vanity url. This sets the URL which the Panacea website is available at. ie. my.flipdish.com/[vanityurl]
     * @param {String} appId Application identifier.
     * @param {module:api/AppsApi~getPanaceaVanityUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getPanaceaVanityUrl = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getPanaceaVanityUrl");
      }


      var pathParams = {
        'appId': appId
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/panacea/url', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSupportedCountries operation.
     * @callback module:api/AppsApi~getSupportedCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultSupportedCountry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all supported countries.
     * @param {module:api/AppsApi~getSupportedCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultSupportedCountry}
     */
    this.getSupportedCountries = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiArrayResultSupportedCountry;

      return this.apiClient.callApi(
        '/api/v1.0/apps/supportedcountries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the isPanaceaVanityUrlAvailable operation.
     * @callback module:api/AppsApi~isPanaceaVanityUrlAvailableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Is panacea vanity url available
     * Minimum length of 3 characters
     * @param {String} vanityUrl Vanity url to check
     * @param {String} appId 
     * @param {module:api/AppsApi~isPanaceaVanityUrlAvailableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.isPanaceaVanityUrlAvailable = function(vanityUrl, appId, callback) {
      var postBody = null;

      // verify the required parameter 'vanityUrl' is set
      if (vanityUrl === undefined || vanityUrl === null) {
        throw new Error("Missing the required parameter 'vanityUrl' when calling isPanaceaVanityUrlAvailable");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling isPanaceaVanityUrlAvailable");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'vanityUrl': vanityUrl,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/panacea/url/available', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setAppConfig operation.
     * @callback module:api/AppsApi~setAppConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the application configuration
     * @param {String} appId Application identifier
     * @param {module:model/AppConfigUpdateModel} appConfigUpdate Changes to the configuration
     * @param {module:api/AppsApi~setAppConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultApp}
     */
    this.setAppConfig = function(appId, appConfigUpdate, callback) {
      var postBody = appConfigUpdate;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setAppConfig");
      }

      // verify the required parameter 'appConfigUpdate' is set
      if (appConfigUpdate === undefined || appConfigUpdate === null) {
        throw new Error("Missing the required parameter 'appConfigUpdate' when calling setAppConfig");
      }


      var pathParams = {
        'appId': appId
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
      var returnType = RestApiResultApp;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/config', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setAppHostname operation.
     * @callback module:api/AppsApi~setAppHostnameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the application hostname.
     * If no subdomain is specified in {hostname} 'www' will be prepended.
     * @param {String} appId Application identifier.
     * @param {String} hostname The new Hostname.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isEmbed Will the website be embedded
     * @param {module:api/AppsApi~setAppHostnameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.setAppHostname = function(appId, hostname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setAppHostname");
      }

      // verify the required parameter 'hostname' is set
      if (hostname === undefined || hostname === null) {
        throw new Error("Missing the required parameter 'hostname' when calling setAppHostname");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'hostname': hostname,
        'isEmbed': opts['isEmbed'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/hostname', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setAppLanguages operation.
     * @callback module:api/AppsApi~setAppLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the application languages
     * @param {String} appId Application identifier
     * @param {Array.<module:model/Language>} languages New list of languages
     * @param {module:api/AppsApi~setAppLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultApp}
     */
    this.setAppLanguages = function(appId, languages, callback) {
      var postBody = languages;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setAppLanguages");
      }

      // verify the required parameter 'languages' is set
      if (languages === undefined || languages === null) {
        throw new Error("Missing the required parameter 'languages' when calling setAppLanguages");
      }


      var pathParams = {
        'appId': appId
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
      var returnType = RestApiResultApp;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/config/languages', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCompliance operation.
     * @callback module:api/AppsApi~setComplianceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppCompliance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the application compliance configuration
     * @param {String} appId Application identifier
     * @param {module:model/String} complianceType Compliance type
     * @param {module:api/AppsApi~setComplianceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppCompliance}
     */
    this.setCompliance = function(appId, complianceType, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setCompliance");
      }

      // verify the required parameter 'complianceType' is set
      if (complianceType === undefined || complianceType === null) {
        throw new Error("Missing the required parameter 'complianceType' when calling setCompliance");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'complianceType': complianceType,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiResultAppCompliance;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/compliance', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPanaceaVanityUrl operation.
     * @callback module:api/AppsApi~setPanaceaVanityUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set panacea vanity url
     * Minimum length of 3 characters
     * @param {String} appId Application identifier.
     * @param {String} vanityUrl Vanity url
     * @param {module:api/AppsApi~setPanaceaVanityUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.setPanaceaVanityUrl = function(appId, vanityUrl, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setPanaceaVanityUrl");
      }

      // verify the required parameter 'vanityUrl' is set
      if (vanityUrl === undefined || vanityUrl === null) {
        throw new Error("Missing the required parameter 'vanityUrl' when calling setPanaceaVanityUrl");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'vanityUrl': vanityUrl,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/panacea/url', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadAppLogo operation.
     * @callback module:api/AppsApi~uploadAppLogoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the application logo \\ icon
     * @param {String} appId Application identifier
     * @param {File} image App Logo
     * @param {module:api/AppsApi~uploadAppLogoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.uploadAppLogo = function(appId, image, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling uploadAppLogo");
      }

      // verify the required parameter 'image' is set
      if (image === undefined || image === null) {
        throw new Error("Missing the required parameter 'image' when calling uploadAppLogo");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'Image': image
      };

      var authNames = ['oauth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/apps/{appId}/logo', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
