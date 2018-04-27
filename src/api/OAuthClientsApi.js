/**
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OAuthClient', 'model/RestApiArrayResultOAuthClient', 'model/RestApiArrayResultOauthClientRedirectUri', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultOAuthClient', 'model/RestApiResultOauthClientRedirectUri', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuthClient'), require('../model/RestApiArrayResultOAuthClient'), require('../model/RestApiArrayResultOauthClientRedirectUri'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultOAuthClient'), require('../model/RestApiResultOauthClientRedirectUri'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OAuthClientsApi = factory(root.Flipdish.ApiClient, root.Flipdish.OAuthClient, root.Flipdish.RestApiArrayResultOAuthClient, root.Flipdish.RestApiArrayResultOauthClientRedirectUri, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiResultOAuthClient, root.Flipdish.RestApiResultOauthClientRedirectUri, root.Flipdish.RestApiStringResult, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, OAuthClient, RestApiArrayResultOAuthClient, RestApiArrayResultOauthClientRedirectUri, RestApiErrorResult, RestApiForbiddenResult, RestApiResultOAuthClient, RestApiResultOauthClientRedirectUri, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * OAuthClients service.
   * @module api/OAuthClientsApi
   * @version 1.0.0
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
     * Create OAuth client redirect uri
     * @param {String} oAuthClientId OAuth client identifier
     * @param {String} uri Redirect uri
     * @param {module:api/OAuthClientsApi~addRedirectUriCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultOauthClientRedirectUri}
     */
    this.addRedirectUri = function(oAuthClientId, uri, callback) {
      var postBody = uri;

      // verify the required parameter 'oAuthClientId' is set
      if (oAuthClientId === undefined || oAuthClientId === null) {
        throw new Error("Missing the required parameter 'oAuthClientId' when calling addRedirectUri");
      }

      // verify the required parameter 'uri' is set
      if (uri === undefined || uri === null) {
        throw new Error("Missing the required parameter 'uri' when calling addRedirectUri");
      }


      var pathParams = {
        'oAuthClientId': oAuthClientId
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
        '/api/v1.0/oauthclients/{oAuthClientId}/redirecturis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOAuthClient operation.
     * @callback module:api/OAuthClientsApi~createOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create OAuth client
     * @param {module:model/OAuthClient} oAuthClient OAuth client
     * @param {module:api/OAuthClientsApi~createOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createOAuthClient = function(oAuthClient, callback) {
      var postBody = oAuthClient;

      // verify the required parameter 'oAuthClient' is set
      if (oAuthClient === undefined || oAuthClient === null) {
        throw new Error("Missing the required parameter 'oAuthClient' when calling createOAuthClient");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/oauthclients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOAuthClient operation.
     * @callback module:api/OAuthClientsApi~deleteOAuthClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete OAuth client
     * @param {String} oAuthClientId OAuth client identifier
     * @param {module:api/OAuthClientsApi~deleteOAuthClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOAuthClient = function(oAuthClientId, callback) {
      var postBody = null;

      // verify the required parameter 'oAuthClientId' is set
      if (oAuthClientId === undefined || oAuthClientId === null) {
        throw new Error("Missing the required parameter 'oAuthClientId' when calling deleteOAuthClient");
      }


      var pathParams = {
        'oAuthClientId': oAuthClientId
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
        '/api/v1.0/oauthclients/{oAuthClientId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuthClientByClientId operation.
     * @callback module:api/OAuthClientsApi~getOAuthClientByClientIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultOAuthClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth client by identifier
     * @param {String} clientId OAuth client identifier
     * @param {module:api/OAuthClientsApi~getOAuthClientByClientIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultOAuthClient}
     */
    this.getOAuthClientByClientId = function(clientId, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOAuthClientByClientId");
      }


      var pathParams = {
        'clientId': clientId
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
      var returnType = RestApiResultOAuthClient;

      return this.apiClient.callApi(
        '/api/v1.0/oauthclients/{clientId}', 'GET',
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
     * Get OAuth client secret key
     * @param {String} clientId OAuth client identifier
     * @param {module:api/OAuthClientsApi~getOAuthClientSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getOAuthClientSecret = function(clientId, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOAuthClientSecret");
      }


      var pathParams = {
        'clientId': clientId
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
        '/api/v1.0/oauthclients/{clientId}/secret', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuthClients operation.
     * @callback module:api/OAuthClientsApi~getOAuthClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultOAuthClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all OAuth client
     * @param {module:api/OAuthClientsApi~getOAuthClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultOAuthClient}
     */
    this.getOAuthClients = function(callback) {
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
      var returnType = RestApiArrayResultOAuthClient;

      return this.apiClient.callApi(
        '/api/v1.0/oauthclients', 'GET',
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
     * Get OAuth access token for client
     * @param {String} oAuthClientId OAuth client identifier
     * @param {module:api/OAuthClientsApi~getOauthAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getOauthAccessToken = function(oAuthClientId, callback) {
      var postBody = null;

      // verify the required parameter 'oAuthClientId' is set
      if (oAuthClientId === undefined || oAuthClientId === null) {
        throw new Error("Missing the required parameter 'oAuthClientId' when calling getOauthAccessToken");
      }


      var pathParams = {
        'oAuthClientId': oAuthClientId
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
        '/api/v1.0/oauthclients/{oAuthClientId}/accesstoken', 'GET',
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
     * Get OAuth client redirect uris
     * @param {String} oAuthClientId OAuth client identifier
     * @param {module:api/OAuthClientsApi~getRedirectUrisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultOauthClientRedirectUri}
     */
    this.getRedirectUris = function(oAuthClientId, callback) {
      var postBody = null;

      // verify the required parameter 'oAuthClientId' is set
      if (oAuthClientId === undefined || oAuthClientId === null) {
        throw new Error("Missing the required parameter 'oAuthClientId' when calling getRedirectUris");
      }


      var pathParams = {
        'oAuthClientId': oAuthClientId
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
        '/api/v1.0/oauthclients/{oAuthClientId}/redirecturis', 'GET',
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
     * Delete OAuth client redirect uri
     * @param {String} oAuthClientId OAuth client identifier
     * @param {Number} uriId Redirect uri identifier
     * @param {module:api/OAuthClientsApi~removeRedirectUriCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeRedirectUri = function(oAuthClientId, uriId, callback) {
      var postBody = null;

      // verify the required parameter 'oAuthClientId' is set
      if (oAuthClientId === undefined || oAuthClientId === null) {
        throw new Error("Missing the required parameter 'oAuthClientId' when calling removeRedirectUri");
      }

      // verify the required parameter 'uriId' is set
      if (uriId === undefined || uriId === null) {
        throw new Error("Missing the required parameter 'uriId' when calling removeRedirectUri");
      }


      var pathParams = {
        'oAuthClientId': oAuthClientId,
        'uriId': uriId
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
        '/api/v1.0/oauthclients/{oAuthClientId}/redirecturis/{uriId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
