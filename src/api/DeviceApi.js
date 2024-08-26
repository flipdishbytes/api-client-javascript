/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ClientDeviceAssignEnrolledDevice from '../model/ClientDeviceAssignEnrolledDevice';
import ClientDeviceEnroll from '../model/ClientDeviceEnroll';
import RestApiArrayResultClientDeviceSummary from '../model/RestApiArrayResultClientDeviceSummary';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultClientDevice from '../model/RestApiResultClientDevice';
import RestApiResultClientDeviceEnrollmentResult from '../model/RestApiResultClientDeviceEnrollmentResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* Device service.
* @module api/DeviceApi
* @version 1.0.0
*/
export default class DeviceApi {

    /**
    * Constructs a new DeviceApi. 
    * @alias module:api/DeviceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assignDevice operation.
     * @callback module:api/DeviceApi~assignDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultClientDeviceEnrollmentResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/ClientDeviceAssignEnrolledDevice} assignDeviceRequest 
     * @param {module:api/DeviceApi~assignDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultClientDeviceEnrollmentResult}
     */
    assignDevice(appId, assignDeviceRequest, callback) {
      let postBody = assignDeviceRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling assignDevice");
      }
      // verify the required parameter 'assignDeviceRequest' is set
      if (assignDeviceRequest === undefined || assignDeviceRequest === null) {
        throw new Error("Missing the required parameter 'assignDeviceRequest' when calling assignDevice");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultClientDeviceEnrollmentResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/devices/assign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the enrollDevice operation.
     * @callback module:api/DeviceApi~enrollDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultClientDeviceEnrollmentResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/ClientDeviceEnroll} deviceEnrollmentRequest 
     * @param {module:api/DeviceApi~enrollDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultClientDeviceEnrollmentResult}
     */
    enrollDevice(appId, deviceEnrollmentRequest, callback) {
      let postBody = deviceEnrollmentRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling enrollDevice");
      }
      // verify the required parameter 'deviceEnrollmentRequest' is set
      if (deviceEnrollmentRequest === undefined || deviceEnrollmentRequest === null) {
        throw new Error("Missing the required parameter 'deviceEnrollmentRequest' when calling enrollDevice");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultClientDeviceEnrollmentResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/devices/enroll', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceDetails operation.
     * @callback module:api/DeviceApi~getDeviceDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultClientDevice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceModel 
     * @param {String} deviceId 
     * @param {module:api/DeviceApi~getDeviceDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultClientDevice}
     */
    getDeviceDetails(appId, deviceModel, deviceId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getDeviceDetails");
      }
      // verify the required parameter 'deviceModel' is set
      if (deviceModel === undefined || deviceModel === null) {
        throw new Error("Missing the required parameter 'deviceModel' when calling getDeviceDetails");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDeviceDetails");
      }

      let pathParams = {
        'appId': appId,
        'deviceModel': deviceModel,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultClientDevice;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/devices/device/{deviceModel}/{deviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchDevices operation.
     * @callback module:api/DeviceApi~searchDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultClientDeviceSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.storeId 
     * @param {String} opts.deviceModel 
     * @param {module:api/DeviceApi~searchDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultClientDeviceSummary}
     */
    searchDevices(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling searchDevices");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'storeId': opts['storeId'],
        'deviceModel': opts['deviceModel']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultClientDeviceSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/devices/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
