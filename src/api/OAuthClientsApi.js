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
    define(['ApiClient', 'model/OAuthApp', 'model/RestApiArrayResultOAuthApp', 'model/RestApiArrayResultOauthClientRedirectUri', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultOAuthApp', 'model/RestApiResultOauthClientRedirectUri', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuthApp'), require('../model/RestApiArrayResultOAuthApp'), require('../model/RestApiArrayResultOauthClientRedirectUri'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultOAuthApp'), require('../model/RestApiResultOauthClientRedirectUri'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.OAuthClientsApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.OAuthApp, root.FlipdishOpenApiV10.RestApiArrayResultOAuthApp, root.FlipdishOpenApiV10.RestApiArrayResultOauthClientRedirectUri, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiResultOAuthApp, root.FlipdishOpenApiV10.RestApiResultOauthClientRedirectUri, root.FlipdishOpenApiV10.RestApiStringResult, root.FlipdishOpenApiV10.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, OAuthApp, RestApiArrayResultOAuthApp, RestApiArrayResultOauthClientRedirectUri, RestApiErrorResult, RestApiForbiddenResult, RestApiResultOAuthApp, RestApiResultOauthClientRedirectUri, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * OAuthClients service.
   * @module api/OAuthClientsApi
   * @version v1.0
   */

  /**
   * Constructs a new OAuthClientsApi. 
   * @alias module:api/OAuthClientsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addRedirectUri operation.
     * @callback module:api/OAuthClientsApi~addRedirectUriCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultOauthClientRedirectUri} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create OAuth App redirect uri
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} uri Redirect uri
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~addRedirectUriCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultOauthClientRedirectUri}
     */
    this.addRedirectUri = function(oauthAppId, uri, appId, callback) {
      var postBody = uri;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling addRedirectUri");
      }

      // verify the required parameter 'uri' is set
      if (uri === undefined || uri === null) {
        throw new Error("Missing the required parameter 'uri' when calling addRedirectUri");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling addRedirectUri");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
      var returnType = RestApiResultOauthClientRedirectUri;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOAuthApp operation.
     * @callback module:api/OAuthClientsApi~createOAuthAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create OAuth App
     * @param {module:model/OAuthApp} oAuthApp OAuth App
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~createOAuthAppCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createOAuthApp = function(oAuthApp, appId, callback) {
      var postBody = oAuthApp;

      // verify the required parameter 'oAuthApp' is set
      if (oAuthApp === undefined || oAuthApp === null) {
        throw new Error("Missing the required parameter 'oAuthApp' when calling createOAuthApp");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createOAuthApp");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOAuthApp operation.
     * @callback module:api/OAuthClientsApi~deleteOAuthAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete OAuth App
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~deleteOAuthAppCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOAuthApp = function(oauthAppId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling deleteOAuthApp");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteOAuthApp");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuthApps operation.
     * @callback module:api/OAuthClientsApi~getOAuthAppsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultOAuthApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all OAuth Apps
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.oauthAppName 
     * @param {module:api/OAuthClientsApi~getOAuthAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultOAuthApp}
     */
    this.getOAuthApps = function(appId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOAuthApps");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'oauthAppName': opts['oauthAppName'],
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
      var returnType = RestApiArrayResultOAuthApp;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuthClientByClientId operation.
     * @callback module:api/OAuthClientsApi~getOAuthClientByClientIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultOAuthApp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth App by identifier
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~getOAuthClientByClientIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultOAuthApp}
     */
    this.getOAuthClientByClientId = function(oauthAppId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getOAuthClientByClientId");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOAuthClientByClientId");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
      var returnType = RestApiResultOAuthApp;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuthClientSecret operation.
     * @callback module:api/OAuthClientsApi~getOAuthClientSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth App secret key
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~getOAuthClientSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getOAuthClientSecret = function(oauthAppId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getOAuthClientSecret");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOAuthClientSecret");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}/secret', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOauthAccessToken operation.
     * @callback module:api/OAuthClientsApi~getOauthAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth access token for App
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~getOauthAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getOauthAccessToken = function(oauthAppId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getOauthAccessToken");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOauthAccessToken");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}/accesstoken', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRedirectUris operation.
     * @callback module:api/OAuthClientsApi~getRedirectUrisCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultOauthClientRedirectUri} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth App redirect uris
     * @param {String} oauthAppId OAuth App identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~getRedirectUrisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultOauthClientRedirectUri}
     */
    this.getRedirectUris = function(oauthAppId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getRedirectUris");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getRedirectUris");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
      var returnType = RestApiArrayResultOauthClientRedirectUri;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oAuthClientsGetApplications operation.
     * @callback module:api/OAuthClientsApi~oAuthClientsGetApplicationsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~oAuthClientsGetApplicationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.oAuthClientsGetApplications = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling oAuthClientsGetApplications");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/appnames', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeRedirectUri operation.
     * @callback module:api/OAuthClientsApi~removeRedirectUriCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete OAuth App redirect uri
     * @param {String} oauthAppId OAuth App identifier
     * @param {Number} uriId Redirect uri identifier
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~removeRedirectUriCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeRedirectUri = function(oauthAppId, uriId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling removeRedirectUri");
      }

      // verify the required parameter 'uriId' is set
      if (uriId === undefined || uriId === null) {
        throw new Error("Missing the required parameter 'uriId' when calling removeRedirectUri");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling removeRedirectUri");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
        'uriId': uriId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis/{uriId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOAuthApp operation.
     * @callback module:api/OAuthClientsApi~updateOAuthAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update OAuth App
     * @param {String} oauthAppId OAuth App identifier
     * @param {module:model/OAuthApp} oAuthApp OAuth App
     * @param {String} appId 
     * @param {module:api/OAuthClientsApi~updateOAuthAppCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOAuthApp = function(oauthAppId, oAuthApp, appId, callback) {
      var postBody = oAuthApp;

      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling updateOAuthApp");
      }

      // verify the required parameter 'oAuthApp' is set
      if (oAuthApp === undefined || oAuthApp === null) {
        throw new Error("Missing the required parameter 'oAuthApp' when calling updateOAuthApp");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateOAuthApp");
      }


      var pathParams = {
        'oauthAppId': oauthAppId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/oauthclients/{oauthAppId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
