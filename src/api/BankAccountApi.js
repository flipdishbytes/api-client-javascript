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
    define(['ApiClient', 'model/BankAccountCreate', 'model/RestApiArrayResultBankAccountSummary', 'model/RestApiArrayResultCountryWithAccountFieldsDefinitions', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultAccountFieldsDefinitions', 'model/RestApiResultBankAccountDetail', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BankAccountCreate'), require('../model/RestApiArrayResultBankAccountSummary'), require('../model/RestApiArrayResultCountryWithAccountFieldsDefinitions'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultAccountFieldsDefinitions'), require('../model/RestApiResultBankAccountDetail'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.BankAccountApi = factory(root.Flipdish.ApiClient, root.Flipdish.BankAccountCreate, root.Flipdish.RestApiArrayResultBankAccountSummary, root.Flipdish.RestApiArrayResultCountryWithAccountFieldsDefinitions, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiResultAccountFieldsDefinitions, root.Flipdish.RestApiResultBankAccountDetail, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, BankAccountCreate, RestApiArrayResultBankAccountSummary, RestApiArrayResultCountryWithAccountFieldsDefinitions, RestApiErrorResult, RestApiForbiddenResult, RestApiResultAccountFieldsDefinitions, RestApiResultBankAccountDetail, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * BankAccount service.
   * @module api/BankAccountApi
   * @version 1.0.0
   */

  /**
   * Constructs a new BankAccountApi. 
   * @alias module:api/BankAccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the attachBankAccountToStore operation.
     * @callback module:api/BankAccountApi~attachBankAccountToStoreCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} storeId 
     * @param {module:api/BankAccountApi~attachBankAccountToStoreCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.attachBankAccountToStore = function(appId, bankAccountId, storeId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling attachBankAccountToStore");
      }

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling attachBankAccountToStore");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling attachBankAccountToStore");
      }


      var pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'storeId': storeId
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
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/store/{storeId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createBankAccount operation.
     * @callback module:api/BankAccountApi~createBankAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultBankAccountDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/BankAccountCreate} account 
     * @param {module:api/BankAccountApi~createBankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultBankAccountDetail}
     */
    this.createBankAccount = function(appId, account, callback) {
      var postBody = account;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createBankAccount");
      }

      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling createBankAccount");
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
      var returnType = RestApiResultBankAccountDetail;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBankAccount operation.
     * @callback module:api/BankAccountApi~deleteBankAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {module:api/BankAccountApi~deleteBankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBankAccount = function(appId, bankAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteBankAccount");
      }

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling deleteBankAccount");
      }


      var pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId
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
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBankAccountById operation.
     * @callback module:api/BankAccountApi~getBankAccountByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultBankAccountDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} bankAccountId 
     * @param {String} appId 
     * @param {module:api/BankAccountApi~getBankAccountByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultBankAccountDetail}
     */
    this.getBankAccountById = function(bankAccountId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling getBankAccountById");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getBankAccountById");
      }


      var pathParams = {
        'bankAccountId': bankAccountId,
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
      var returnType = RestApiResultBankAccountDetail;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBankAccounts operation.
     * @callback module:api/BankAccountApi~getBankAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultBankAccountSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/BankAccountApi~getBankAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultBankAccountSummary}
     */
    this.getBankAccounts = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getBankAccounts");
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
      var returnType = RestApiArrayResultBankAccountSummary;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountriesWithFieldDefinitions operation.
     * @callback module:api/BankAccountApi~getCountriesWithFieldDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultCountryWithAccountFieldsDefinitions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/BankAccountApi~getCountriesWithFieldDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultCountryWithAccountFieldsDefinitions}
     */
    this.getCountriesWithFieldDefinitions = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCountriesWithFieldDefinitions");
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
      var returnType = RestApiArrayResultCountryWithAccountFieldsDefinitions;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/countries-field-definitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFieldDefinitions operation.
     * @callback module:api/BankAccountApi~getFieldDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAccountFieldsDefinitions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/BankAccountApi~getFieldDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAccountFieldsDefinitions}
     */
    this.getFieldDefinitions = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getFieldDefinitions");
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
      var returnType = RestApiResultAccountFieldsDefinitions;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/field-definitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBankAccount operation.
     * @callback module:api/BankAccountApi~updateBankAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {module:model/BankAccountCreate} account 
     * @param {module:api/BankAccountApi~updateBankAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBankAccount = function(appId, bankAccountId, account, callback) {
      var postBody = account;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateBankAccount");
      }

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling updateBankAccount");
      }

      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling updateBankAccount");
      }


      var pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId
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
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBankAccountState operation.
     * @callback module:api/BankAccountApi~updateBankAccountStateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {String} state 
     * @param {String} reason 
     * @param {module:api/BankAccountApi~updateBankAccountStateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBankAccountState = function(appId, bankAccountId, state, reason, callback) {
      var postBody = reason;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateBankAccountState");
      }

      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling updateBankAccountState");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling updateBankAccountState");
      }

      // verify the required parameter 'reason' is set
      if (reason === undefined || reason === null) {
        throw new Error("Missing the required parameter 'reason' when calling updateBankAccountState");
      }


      var pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'state': state
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
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/state/{state}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
