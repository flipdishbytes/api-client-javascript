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
import CatalogImage from '../model/CatalogImage';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* CatalogImages service.
* @module api/CatalogImagesApi
* @version 1.0.0
*/
export default class CatalogImagesApi {

    /**
    * Constructs a new CatalogImagesApi. 
    * @alias module:api/CatalogImagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the uploadCatalogImage operation.
     * @callback module:api/CatalogImagesApi~uploadCatalogImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogImage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a Catalog Image
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {File} Image Catalog image
     * @param {module:api/CatalogImagesApi~uploadCatalogImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogImage}
     */
    uploadCatalogImage(appId, Image, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling uploadCatalogImage");
      }
      // verify the required parameter 'Image' is set
      if (Image === undefined || Image === null) {
        throw new Error("Missing the required parameter 'Image' when calling uploadCatalogImage");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'ImageUri'];
      let returnType = CatalogImage;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/catalog/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}