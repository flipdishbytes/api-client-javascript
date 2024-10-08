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
import ItemNutritionInfoV2AddUpdateModel from '../model/ItemNutritionInfoV2AddUpdateModel';
import RestApiArrayResultAllergen from '../model/RestApiArrayResultAllergen';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultNutritionInfoV2 from '../model/RestApiResultNutritionInfoV2';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* MenusNutritionInfoV2 service.
* @module api/MenusNutritionInfoV2Api
* @version 1.0.0
*/
export default class MenusNutritionInfoV2Api {

    /**
    * Constructs a new MenusNutritionInfoV2Api. 
    * @alias module:api/MenusNutritionInfoV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrUpdateMenuItemNutritionInfoV2 operation.
     * @callback module:api/MenusNutritionInfoV2Api~addOrUpdateMenuItemNutritionInfoV2Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update menuitem nutrition info by menu item's publicId
     * @param {Number} menuId Menu identifier
     * @param {String} publicId Menu item's publicId
     * @param {String} appId 
     * @param {module:model/ItemNutritionInfoV2AddUpdateModel} addOrUpdateModel Allergen ids
     * @param {module:api/MenusNutritionInfoV2Api~addOrUpdateMenuItemNutritionInfoV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    addOrUpdateMenuItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel, callback) {
      let postBody = addOrUpdateModel;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addOrUpdateMenuItemNutritionInfoV2");
      }
      // verify the required parameter 'publicId' is set
      if (publicId === undefined || publicId === null) {
        throw new Error("Missing the required parameter 'publicId' when calling addOrUpdateMenuItemNutritionInfoV2");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling addOrUpdateMenuItemNutritionInfoV2");
      }
      // verify the required parameter 'addOrUpdateModel' is set
      if (addOrUpdateModel === undefined || addOrUpdateModel === null) {
        throw new Error("Missing the required parameter 'addOrUpdateModel' when calling addOrUpdateMenuItemNutritionInfoV2");
      }

      let pathParams = {
        'menuId': menuId,
        'publicId': publicId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/{menuId}/menuItem/{publicId}/nutritionv2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrUpdateMenuItemOptionSetItemNutritionInfoV2 operation.
     * @callback module:api/MenusNutritionInfoV2Api~addOrUpdateMenuItemOptionSetItemNutritionInfoV2Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update menuitem option set item's nutrition info by its publicId
     * @param {Number} menuId Menu identifier
     * @param {String} publicId Menu item option set item's publicId
     * @param {String} appId 
     * @param {module:model/ItemNutritionInfoV2AddUpdateModel} addOrUpdateModel Allergen ids
     * @param {module:api/MenusNutritionInfoV2Api~addOrUpdateMenuItemOptionSetItemNutritionInfoV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    addOrUpdateMenuItemOptionSetItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel, callback) {
      let postBody = addOrUpdateModel;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addOrUpdateMenuItemOptionSetItemNutritionInfoV2");
      }
      // verify the required parameter 'publicId' is set
      if (publicId === undefined || publicId === null) {
        throw new Error("Missing the required parameter 'publicId' when calling addOrUpdateMenuItemOptionSetItemNutritionInfoV2");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling addOrUpdateMenuItemOptionSetItemNutritionInfoV2");
      }
      // verify the required parameter 'addOrUpdateModel' is set
      if (addOrUpdateModel === undefined || addOrUpdateModel === null) {
        throw new Error("Missing the required parameter 'addOrUpdateModel' when calling addOrUpdateMenuItemOptionSetItemNutritionInfoV2");
      }

      let pathParams = {
        'menuId': menuId,
        'publicId': publicId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/{menuId}/menuItemOption/{publicId}/nutritionv2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllergensV2 operation.
     * @callback module:api/MenusNutritionInfoV2Api~getAllergensV2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultAllergen} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get allergens
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageId 
     * @param {module:api/MenusNutritionInfoV2Api~getAllergensV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultAllergen}
     */
    getAllergensV2(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAllergensV2");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'languageId': opts['languageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultAllergen;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/nutritionv2/allergens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuNutritionInfoV2ByMenuId operation.
     * @callback module:api/MenusNutritionInfoV2Api~getMenuNutritionInfoV2ByMenuIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultNutritionInfoV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu nutrition by menuId
     * @param {String} appId 
     * @param {Number} menuId Menu identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageId 
     * @param {module:api/MenusNutritionInfoV2Api~getMenuNutritionInfoV2ByMenuIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultNutritionInfoV2}
     */
    getMenuNutritionInfoV2ByMenuId(appId, menuId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getMenuNutritionInfoV2ByMenuId");
      }
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuNutritionInfoV2ByMenuId");
      }

      let pathParams = {
        'appId': appId,
        'menuId': menuId
      };
      let queryParams = {
        'languageId': opts['languageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultNutritionInfoV2;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/{menuId}/nutritionv2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
