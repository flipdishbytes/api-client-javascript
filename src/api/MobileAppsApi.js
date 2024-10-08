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
import AppConfigSalesChannel from '../model/AppConfigSalesChannel';
import MobileAppsSubmission from '../model/MobileAppsSubmission';
import RestApiArrayResultMobileAppsStatistics from '../model/RestApiArrayResultMobileAppsStatistics';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiIntegerResult from '../model/RestApiIntegerResult';
import RestApiResultAppConfigSalesChannel from '../model/RestApiResultAppConfigSalesChannel';
import RestApiResultMobileAppsImage from '../model/RestApiResultMobileAppsImage';
import RestApiResultMobileAppsSubmission from '../model/RestApiResultMobileAppsSubmission';
import RestApiResultMobileAppsSubmissionDetails from '../model/RestApiResultMobileAppsSubmissionDetails';
import RestApiResultMobileAppsSubmissionStatus from '../model/RestApiResultMobileAppsSubmissionStatus';
import RestApiResultRestApiIntegerResult from '../model/RestApiResultRestApiIntegerResult';
import RestApiResultUpdateMobileAppsSubmissionStatus from '../model/RestApiResultUpdateMobileAppsSubmissionStatus';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UpdateMobileAppsSubmissionStatus from '../model/UpdateMobileAppsSubmissionStatus';

/**
* MobileApps service.
* @module api/MobileAppsApi
* @version 1.0.0
*/
export default class MobileAppsApi {

    /**
    * Constructs a new MobileAppsApi. 
    * @alias module:api/MobileAppsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAppConfigSalesChannel operation.
     * @callback module:api/MobileAppsApi~getAppConfigSalesChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppConfigSalesChannel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/MobileAppsApi~getAppConfigSalesChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppConfigSalesChannel}
     */
    getAppConfigSalesChannel(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAppConfigSalesChannel");
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
      let returnType = RestApiResultAppConfigSalesChannel;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/saleschannel/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatistics operation.
     * @callback module:api/MobileAppsApi~getStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultMobileAppsStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Array.<module:model/String>} platformTypes 
     * @param {module:api/MobileAppsApi~getStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultMobileAppsStatistics}
     */
    getStatistics(appId, platformTypes, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStatistics");
      }
      // verify the required parameter 'platformTypes' is set
      if (platformTypes === undefined || platformTypes === null) {
        throw new Error("Missing the required parameter 'platformTypes' when calling getStatistics");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'platformTypes': this.apiClient.buildCollectionParam(platformTypes, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultMobileAppsStatistics;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubmissionDetails operation.
     * @callback module:api/MobileAppsApi~getSubmissionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMobileAppsSubmissionDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/MobileAppsApi~getSubmissionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMobileAppsSubmissionDetails}
     */
    getSubmissionDetails(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getSubmissionDetails");
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
      let returnType = RestApiResultMobileAppsSubmissionDetails;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubmissionStatus operation.
     * @callback module:api/MobileAppsApi~getSubmissionStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMobileAppsSubmissionStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} submissionId 
     * @param {module:api/MobileAppsApi~getSubmissionStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMobileAppsSubmissionStatus}
     */
    getSubmissionStatus(appId, submissionId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getSubmissionStatus");
      }
      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling getSubmissionStatus");
      }

      let pathParams = {
        'appId': appId,
        'submissionId': submissionId
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
      let returnType = RestApiResultMobileAppsSubmissionStatus;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/{submissionId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the publish operation.
     * @callback module:api/MobileAppsApi~publishCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestApiIntegerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} submissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.platformType 
     * @param {module:api/MobileAppsApi~publishCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestApiIntegerResult}
     */
    publish(appId, submissionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling publish");
      }
      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling publish");
      }

      let pathParams = {
        'appId': appId,
        'submissionId': submissionId
      };
      let queryParams = {
        'platformType': opts['platformType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultRestApiIntegerResult;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/{submissionId}/publish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resubmission operation.
     * @callback module:api/MobileAppsApi~resubmissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMobileAppsSubmission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/MobileAppsSubmission} mobileAppsSubmission 
     * @param {module:api/MobileAppsApi~resubmissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMobileAppsSubmission}
     */
    resubmission(appId, mobileAppsSubmission, callback) {
      let postBody = mobileAppsSubmission;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling resubmission");
      }
      // verify the required parameter 'mobileAppsSubmission' is set
      if (mobileAppsSubmission === undefined || mobileAppsSubmission === null) {
        throw new Error("Missing the required parameter 'mobileAppsSubmission' when calling resubmission");
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
      let returnType = RestApiResultMobileAppsSubmission;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/resubmission', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submission operation.
     * @callback module:api/MobileAppsApi~submissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMobileAppsSubmission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/MobileAppsSubmission} mobileAppsSubmission 
     * @param {module:api/MobileAppsApi~submissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMobileAppsSubmission}
     */
    submission(appId, mobileAppsSubmission, callback) {
      let postBody = mobileAppsSubmission;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling submission");
      }
      // verify the required parameter 'mobileAppsSubmission' is set
      if (mobileAppsSubmission === undefined || mobileAppsSubmission === null) {
        throw new Error("Missing the required parameter 'mobileAppsSubmission' when calling submission");
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
      let returnType = RestApiResultMobileAppsSubmission;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unpublish operation.
     * @callback module:api/MobileAppsApi~unpublishCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiIntegerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} submissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.platformType 
     * @param {module:api/MobileAppsApi~unpublishCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiIntegerResult}
     */
    unpublish(appId, submissionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling unpublish");
      }
      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling unpublish");
      }

      let pathParams = {
        'appId': appId,
        'submissionId': submissionId
      };
      let queryParams = {
        'platformType': opts['platformType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiIntegerResult;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/{submissionId}/unpublish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAppConfigSalesChannel operation.
     * @callback module:api/MobileAppsApi~updateAppConfigSalesChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppConfigSalesChannel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/AppConfigSalesChannel} appConfigSalesChannel 
     * @param {module:api/MobileAppsApi~updateAppConfigSalesChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppConfigSalesChannel}
     */
    updateAppConfigSalesChannel(appId, appConfigSalesChannel, callback) {
      let postBody = appConfigSalesChannel;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateAppConfigSalesChannel");
      }
      // verify the required parameter 'appConfigSalesChannel' is set
      if (appConfigSalesChannel === undefined || appConfigSalesChannel === null) {
        throw new Error("Missing the required parameter 'appConfigSalesChannel' when calling updateAppConfigSalesChannel");
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
      let returnType = RestApiResultAppConfigSalesChannel;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/saleschannel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubmissionStatus operation.
     * @callback module:api/MobileAppsApi~updateSubmissionStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultUpdateMobileAppsSubmissionStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} submissionId 
     * @param {module:model/UpdateMobileAppsSubmissionStatus} updateSubmissionStatus 
     * @param {module:api/MobileAppsApi~updateSubmissionStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultUpdateMobileAppsSubmissionStatus}
     */
    updateSubmissionStatus(appId, submissionId, updateSubmissionStatus, callback) {
      let postBody = updateSubmissionStatus;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateSubmissionStatus");
      }
      // verify the required parameter 'submissionId' is set
      if (submissionId === undefined || submissionId === null) {
        throw new Error("Missing the required parameter 'submissionId' when calling updateSubmissionStatus");
      }
      // verify the required parameter 'updateSubmissionStatus' is set
      if (updateSubmissionStatus === undefined || updateSubmissionStatus === null) {
        throw new Error("Missing the required parameter 'updateSubmissionStatus' when calling updateSubmissionStatus");
      }

      let pathParams = {
        'appId': appId,
        'submissionId': submissionId
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
      let returnType = RestApiResultUpdateMobileAppsSubmissionStatus;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/{submissionId}/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadImage operation.
     * @callback module:api/MobileAppsApi~uploadImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMobileAppsImage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {File} Image Mobile Apps image
     * @param {module:api/MobileAppsApi~uploadImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMobileAppsImage}
     */
    uploadImage(appId, Image, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling uploadImage");
      }
      // verify the required parameter 'Image' is set
      if (Image === undefined || Image === null) {
        throw new Error("Missing the required parameter 'Image' when calling uploadImage");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'Image': Image
      };

      let authNames = ['oauth2'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultMobileAppsImage;
      return this.apiClient.callApi(
        '/api/v1.0/mobileapps/{appId}/submission/image', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
