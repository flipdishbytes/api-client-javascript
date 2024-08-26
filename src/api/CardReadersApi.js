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
import CardReaderRegistrationRequest from '../model/CardReaderRegistrationRequest';
import GeoPointRequest from '../model/GeoPointRequest';
import ProcessPaymentIntentRequest from '../model/ProcessPaymentIntentRequest';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultBluetoothTerminalStatus from '../model/RestApiResultBluetoothTerminalStatus';
import RestApiResultCardReader from '../model/RestApiResultCardReader';
import RestApiResultStripeTerminalConnectionToken from '../model/RestApiResultStripeTerminalConnectionToken';
import RestApiResultStripeTerminalLocation from '../model/RestApiResultStripeTerminalLocation';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UnRegisterCardReaderRequest from '../model/UnRegisterCardReaderRequest';

/**
* CardReaders service.
* @module api/CardReadersApi
* @version 1.0.0
*/
export default class CardReadersApi {

    /**
    * Constructs a new CardReadersApi. 
    * @alias module:api/CardReadersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelCurrentlyInitiatedBluetoothDeviceUpdate operation.
     * @callback module:api/CardReadersApi~cancelCurrentlyInitiatedBluetoothDeviceUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:model/String} terminalType 
     * @param {module:api/CardReadersApi~cancelCurrentlyInitiatedBluetoothDeviceUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    cancelCurrentlyInitiatedBluetoothDeviceUpdate(appId, deviceId, terminalType, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling cancelCurrentlyInitiatedBluetoothDeviceUpdate");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling cancelCurrentlyInitiatedBluetoothDeviceUpdate");
      }
      // verify the required parameter 'terminalType' is set
      if (terminalType === undefined || terminalType === null) {
        throw new Error("Missing the required parameter 'terminalType' when calling cancelCurrentlyInitiatedBluetoothDeviceUpdate");
      }

      let pathParams = {
        'appId': appId,
        'deviceId': deviceId,
        'terminalType': terminalType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/cancelUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelReaderAction operation.
     * @callback module:api/CardReadersApi~cancelReaderActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCardReader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} readerId 
     * @param {String} appId 
     * @param {module:api/CardReadersApi~cancelReaderActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCardReader}
     */
    cancelReaderAction(readerId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'readerId' is set
      if (readerId === undefined || readerId === null) {
        throw new Error("Missing the required parameter 'readerId' when calling cancelReaderAction");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling cancelReaderAction");
      }

      let pathParams = {
        'readerId': readerId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultCardReader;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payments/terminals/stripe/{readerId}/cancel_action', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cardReadersGetReader operation.
     * @callback module:api/CardReadersApi~cardReadersGetReaderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCardReader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} readerId 
     * @param {String} appId 
     * @param {module:api/CardReadersApi~cardReadersGetReaderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCardReader}
     */
    cardReadersGetReader(readerId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'readerId' is set
      if (readerId === undefined || readerId === null) {
        throw new Error("Missing the required parameter 'readerId' when calling cardReadersGetReader");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling cardReadersGetReader");
      }

      let pathParams = {
        'readerId': readerId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultCardReader;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payments/terminals/stripe/{readerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateStripeTerminalLocation operation.
     * @callback module:api/CardReadersApi~generateStripeTerminalLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeTerminalLocation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/GeoPointRequest} geoPointRequest 
     * @param {module:api/CardReadersApi~generateStripeTerminalLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeTerminalLocation}
     */
    generateStripeTerminalLocation(appId, geoPointRequest, callback) {
      let postBody = geoPointRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling generateStripeTerminalLocation");
      }
      // verify the required parameter 'geoPointRequest' is set
      if (geoPointRequest === undefined || geoPointRequest === null) {
        throw new Error("Missing the required parameter 'geoPointRequest' when calling generateStripeTerminalLocation");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeTerminalLocation;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/stripeterminal/location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBluetoothTerminalStatus operation.
     * @callback module:api/CardReadersApi~getBluetoothTerminalStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultBluetoothTerminalStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:api/CardReadersApi~getBluetoothTerminalStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultBluetoothTerminalStatus}
     */
    getBluetoothTerminalStatus(appId, deviceId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getBluetoothTerminalStatus");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getBluetoothTerminalStatus");
      }

      let pathParams = {
        'appId': appId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultBluetoothTerminalStatus;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStripeConnectionToken operation.
     * @callback module:api/CardReadersApi~getStripeConnectionTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeTerminalConnectionToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/CardReadersApi~getStripeConnectionTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeTerminalConnectionToken}
     */
    getStripeConnectionToken(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStripeConnectionToken");
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
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeTerminalConnectionToken;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/stripeterminal/connectiontoken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateBluetoothTerminalDeviceUpdateCheck operation.
     * @callback module:api/CardReadersApi~initiateBluetoothTerminalDeviceUpdateCheckCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {String} terminalType 
     * @param {module:api/CardReadersApi~initiateBluetoothTerminalDeviceUpdateCheckCallback} callback The callback function, accepting three arguments: error, data, response
     */
    initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling initiateBluetoothTerminalDeviceUpdateCheck");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling initiateBluetoothTerminalDeviceUpdateCheck");
      }
      // verify the required parameter 'terminalType' is set
      if (terminalType === undefined || terminalType === null) {
        throw new Error("Missing the required parameter 'terminalType' when calling initiateBluetoothTerminalDeviceUpdateCheck");
      }

      let pathParams = {
        'appId': appId,
        'deviceId': deviceId,
        'terminalType': terminalType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/checkForUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateKioskBluetoothPairingMode operation.
     * @callback module:api/CardReadersApi~initiateKioskBluetoothPairingModeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:model/String} terminalType 
     * @param {module:api/CardReadersApi~initiateKioskBluetoothPairingModeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    initiateKioskBluetoothPairingMode(appId, deviceId, terminalType, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling initiateKioskBluetoothPairingMode");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling initiateKioskBluetoothPairingMode");
      }
      // verify the required parameter 'terminalType' is set
      if (terminalType === undefined || terminalType === null) {
        throw new Error("Missing the required parameter 'terminalType' when calling initiateKioskBluetoothPairingMode");
      }

      let pathParams = {
        'appId': appId,
        'deviceId': deviceId,
        'terminalType': terminalType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/pair', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateKioskBluetoothUpdateInstall operation.
     * @callback module:api/CardReadersApi~initiateKioskBluetoothUpdateInstallCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:model/String} terminalType 
     * @param {module:api/CardReadersApi~initiateKioskBluetoothUpdateInstallCallback} callback The callback function, accepting three arguments: error, data, response
     */
    initiateKioskBluetoothUpdateInstall(appId, deviceId, terminalType, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling initiateKioskBluetoothUpdateInstall");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling initiateKioskBluetoothUpdateInstall");
      }
      // verify the required parameter 'terminalType' is set
      if (terminalType === undefined || terminalType === null) {
        throw new Error("Missing the required parameter 'terminalType' when calling initiateKioskBluetoothUpdateInstall");
      }

      let pathParams = {
        'appId': appId,
        'deviceId': deviceId,
        'terminalType': terminalType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/installUpdate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateReaderProcessPaymentIntent operation.
     * @callback module:api/CardReadersApi~initiateReaderProcessPaymentIntentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCardReader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} readerId 
     * @param {String} appId 
     * @param {module:model/ProcessPaymentIntentRequest} request 
     * @param {module:api/CardReadersApi~initiateReaderProcessPaymentIntentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCardReader}
     */
    initiateReaderProcessPaymentIntent(readerId, appId, request, callback) {
      let postBody = request;
      // verify the required parameter 'readerId' is set
      if (readerId === undefined || readerId === null) {
        throw new Error("Missing the required parameter 'readerId' when calling initiateReaderProcessPaymentIntent");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling initiateReaderProcessPaymentIntent");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling initiateReaderProcessPaymentIntent");
      }

      let pathParams = {
        'readerId': readerId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultCardReader;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payments/terminals/stripe/{readerId}/processPaymentIntent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerStripeTerminal operation.
     * @callback module:api/CardReadersApi~registerStripeTerminalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCardReader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/CardReaderRegistrationRequest} request 
     * @param {module:api/CardReadersApi~registerStripeTerminalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCardReader}
     */
    registerStripeTerminal(appId, request, callback) {
      let postBody = request;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling registerStripeTerminal");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling registerStripeTerminal");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultCardReader;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payments/terminals/stripe/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unRegisterTerminal operation.
     * @callback module:api/CardReadersApi~unRegisterTerminalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCardReader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/UnRegisterCardReaderRequest} request 
     * @param {module:api/CardReadersApi~unRegisterTerminalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCardReader}
     */
    unRegisterTerminal(appId, request, callback) {
      let postBody = request;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling unRegisterTerminal");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling unRegisterTerminal");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultCardReader;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payments/terminals/stripe/unregister', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unpairCurrentlyPairedBluetoothDevice operation.
     * @callback module:api/CardReadersApi~unpairCurrentlyPairedBluetoothDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} deviceId 
     * @param {module:api/CardReadersApi~unpairCurrentlyPairedBluetoothDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unpairCurrentlyPairedBluetoothDevice(appId, deviceId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling unpairCurrentlyPairedBluetoothDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling unpairCurrentlyPairedBluetoothDevice");
      }

      let pathParams = {
        'appId': appId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/unpair', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
