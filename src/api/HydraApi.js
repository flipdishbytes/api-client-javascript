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
    define(['ApiClient', 'model/EmvTerminal', 'model/HydraRegistrationRequest', 'model/RestApiArrayResultEmvTerminalWithAssignments', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiPaginationResultHydraDeviceDetails', 'model/RestApiResultHydraConfig', 'model/RestApiResultHydraStatus', 'model/RestApiResultPaymentTerminalDetails', 'model/RestApiResultPaymentTerminalTransactionDetails', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EmvTerminal'), require('../model/HydraRegistrationRequest'), require('../model/RestApiArrayResultEmvTerminalWithAssignments'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiPaginationResultHydraDeviceDetails'), require('../model/RestApiResultHydraConfig'), require('../model/RestApiResultHydraStatus'), require('../model/RestApiResultPaymentTerminalDetails'), require('../model/RestApiResultPaymentTerminalTransactionDetails'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.HydraApi = factory(root.Flipdish.ApiClient, root.Flipdish.EmvTerminal, root.Flipdish.HydraRegistrationRequest, root.Flipdish.RestApiArrayResultEmvTerminalWithAssignments, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiPaginationResultHydraDeviceDetails, root.Flipdish.RestApiResultHydraConfig, root.Flipdish.RestApiResultHydraStatus, root.Flipdish.RestApiResultPaymentTerminalDetails, root.Flipdish.RestApiResultPaymentTerminalTransactionDetails, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, EmvTerminal, HydraRegistrationRequest, RestApiArrayResultEmvTerminalWithAssignments, RestApiErrorResult, RestApiForbiddenResult, RestApiPaginationResultHydraDeviceDetails, RestApiResultHydraConfig, RestApiResultHydraStatus, RestApiResultPaymentTerminalDetails, RestApiResultPaymentTerminalTransactionDetails, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * Hydra service.
   * @module api/HydraApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HydraApi. 
   * @alias module:api/HydraApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignEmv operation.
     * @callback module:api/HydraApi~assignEmvCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign an EMV terminal to a kiosk
     * @param {String} appId 
     * @param {Number} hydraConfigId 
     * @param {Number} emvTerminalId 
     * @param {module:api/HydraApi~assignEmvCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.assignEmv = function(appId, hydraConfigId, emvTerminalId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling assignEmv");
      }

      // verify the required parameter 'hydraConfigId' is set
      if (hydraConfigId === undefined || hydraConfigId === null) {
        throw new Error("Missing the required parameter 'hydraConfigId' when calling assignEmv");
      }

      // verify the required parameter 'emvTerminalId' is set
      if (emvTerminalId === undefined || emvTerminalId === null) {
        throw new Error("Missing the required parameter 'emvTerminalId' when calling assignEmv");
      }


      var pathParams = {
        'appId': appId,
        'hydraConfigId': hydraConfigId,
        'emvTerminalId': emvTerminalId
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
        '/api/v1.0/{appId}/hydra/emvterminal/assign/{hydraConfigId}/{emvTerminalId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the attachStoreToTerminal operation.
     * @callback module:api/HydraApi~attachStoreToTerminalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHydraStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {Number} storeId 
     * @param {module:api/HydraApi~attachStoreToTerminalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHydraStatus}
     */
    this.attachStoreToTerminal = function(appId, deviceId, storeId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling attachStoreToTerminal");
      }

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling attachStoreToTerminal");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling attachStoreToTerminal");
      }


      var pathParams = {
        'appId': appId,
        'deviceId': deviceId,
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
      var returnType = RestApiResultHydraStatus;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/{deviceId}/attach/{storeId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelEmvPayment operation.
     * @callback module:api/HydraApi~cancelEmvPaymentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} orderId 
     * @param {String} appId 
     * @param {module:api/HydraApi~cancelEmvPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelEmvPayment = function(orderId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling cancelEmvPayment");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling cancelEmvPayment");
      }


      var pathParams = {
        'orderId': orderId,
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
        '/api/v1.0/{appId}/hydra/cancelemvpayment/{orderId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the detachStoreFromTerminal operation.
     * @callback module:api/HydraApi~detachStoreFromTerminalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHydraStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {Number} storeId 
     * @param {module:api/HydraApi~detachStoreFromTerminalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHydraStatus}
     */
    this.detachStoreFromTerminal = function(appId, deviceId, storeId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling detachStoreFromTerminal");
      }

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling detachStoreFromTerminal");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling detachStoreFromTerminal");
      }


      var pathParams = {
        'appId': appId,
        'deviceId': deviceId,
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
      var returnType = RestApiResultHydraStatus;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/{deviceId}/detach/{storeId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachedDevices operation.
     * @callback module:api/HydraApi~getAttachedDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultHydraDeviceDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {module:model/String} deviceType 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageIndex 
     * @param {Number} opts.pageSize 
     * @param {Number} opts.storeId 
     * @param {String} opts.deviceName 
     * @param {String} opts.deviceSerial 
     * @param {module:api/HydraApi~getAttachedDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultHydraDeviceDetails}
     */
    this.getAttachedDevices = function(appId, deviceType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAttachedDevices");
      }

      // verify the required parameter 'deviceType' is set
      if (deviceType === undefined || deviceType === null) {
        throw new Error("Missing the required parameter 'deviceType' when calling getAttachedDevices");
      }


      var pathParams = {
        'appId': appId,
        'deviceType': deviceType
      };
      var queryParams = {
        'pageIndex': opts['pageIndex'],
        'pageSize': opts['pageSize'],
        'storeId': opts['storeId'],
        'deviceName': opts['deviceName'],
        'deviceSerial': opts['deviceSerial'],
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
      var returnType = RestApiPaginationResultHydraDeviceDetails;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/{deviceType}/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEMVTerminalDetails operation.
     * @callback module:api/HydraApi~getEMVTerminalDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultPaymentTerminalDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {module:api/HydraApi~getEMVTerminalDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultPaymentTerminalDetails}
     */
    this.getEMVTerminalDetails = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getEMVTerminalDetails");
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
      var returnType = RestApiResultPaymentTerminalDetails;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/emvterminal', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmvOrderState operation.
     * @callback module:api/HydraApi~getEmvOrderStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultPaymentTerminalTransactionDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {Number} orderId 
     * @param {String} appId 
     * @param {module:api/HydraApi~getEmvOrderStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultPaymentTerminalTransactionDetails}
     */
    this.getEmvOrderState = function(orderId, appId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getEmvOrderState");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getEmvOrderState");
      }


      var pathParams = {
        'orderId': orderId,
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
      var returnType = RestApiResultPaymentTerminalTransactionDetails;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/emvorderstate/{orderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRegistration operation.
     * @callback module:api/HydraApi~getRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHydraStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/HydraApi~getRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHydraStatus}
     */
    this.getRegistration = function(callback) {
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
      var returnType = RestApiResultHydraStatus;

      return this.apiClient.callApi(
        '/api/v1.0/hydra/registration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSettings operation.
     * @callback module:api/HydraApi~getSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHydraConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {module:api/HydraApi~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHydraConfig}
     */
    this.getSettings = function(callback) {
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
      var returnType = RestApiResultHydraConfig;

      return this.apiClient.callApi(
        '/api/v1.0/hydra/settings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the hydraCreateEmv operation.
     * @callback module:api/HydraApi~hydraCreateEmvCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {module:model/EmvTerminal} emv 
     * @param {module:api/HydraApi~hydraCreateEmvCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.hydraCreateEmv = function(appId, emv, callback) {
      var postBody = emv;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling hydraCreateEmv");
      }

      // verify the required parameter 'emv' is set
      if (emv === undefined || emv === null) {
        throw new Error("Missing the required parameter 'emv' when calling hydraCreateEmv");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/emvterminals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the hydraDeleteEmv operation.
     * @callback module:api/HydraApi~hydraDeleteEmvCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {Number} id 
     * @param {module:api/HydraApi~hydraDeleteEmvCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.hydraDeleteEmv = function(appId, id, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling hydraDeleteEmv");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling hydraDeleteEmv");
      }


      var pathParams = {
        'appId': appId,
        'id': id
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
        '/api/v1.0/{appId}/emvterminals/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the hydraGetEmvsForAppId operation.
     * @callback module:api/HydraApi~hydraGetEmvsForAppIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultEmvTerminalWithAssignments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List EMV terminals belonging to the given AppNameId
     * @param {String} appId 
     * @param {module:api/HydraApi~hydraGetEmvsForAppIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultEmvTerminalWithAssignments}
     */
    this.hydraGetEmvsForAppId = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling hydraGetEmvsForAppId");
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
      var returnType = RestApiArrayResultEmvTerminalWithAssignments;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/emvterminals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loginWithDeviceId operation.
     * @callback module:api/HydraApi~loginWithDeviceIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.hydraUserType 
     * @param {String} opts.serialNumber 
     * @param {module:api/HydraApi~loginWithDeviceIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.loginWithDeviceId = function(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling loginWithDeviceId");
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
        'hydraUserType': opts['hydraUserType'],
        'serialNumber': opts['serialNumber'],
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
        '/api/v1.0/hydra/{deviceId}/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:api/HydraApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHydraStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {module:model/HydraRegistrationRequest} hydraRegistration 
     * @param {module:api/HydraApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHydraStatus}
     */
    this.register = function(appId, hydraRegistration, callback) {
      var postBody = hydraRegistration;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling register");
      }

      // verify the required parameter 'hydraRegistration' is set
      if (hydraRegistration === undefined || hydraRegistration === null) {
        throw new Error("Missing the required parameter 'hydraRegistration' when calling register");
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
      var returnType = RestApiResultHydraStatus;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/hydra/registration', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unAssign operation.
     * @callback module:api/HydraApi~unAssignCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [Private]
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:api/HydraApi~unAssignCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.unAssign = function(appId, deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling unAssign");
      }

      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling unAssign");
      }


      var pathParams = {
        'appId': appId,
        'deviceId': deviceId
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
        '/api/v1.0/{appId}/hydra/{deviceId}/registration', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unassignEmv operation.
     * @callback module:api/HydraApi~unassignEmvCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unassign the currently assigned EMV terminal from a kiosk
     * @param {String} appId 
     * @param {Number} hydraConfigId 
     * @param {module:api/HydraApi~unassignEmvCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.unassignEmv = function(appId, hydraConfigId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling unassignEmv");
      }

      // verify the required parameter 'hydraConfigId' is set
      if (hydraConfigId === undefined || hydraConfigId === null) {
        throw new Error("Missing the required parameter 'hydraConfigId' when calling unassignEmv");
      }


      var pathParams = {
        'appId': appId,
        'hydraConfigId': hydraConfigId
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
        '/api/v1.0/{appId}/hydra/emvterminal/unassign/{hydraConfigId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
