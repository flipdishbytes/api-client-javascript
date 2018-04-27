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
    define(['ApiClient', 'model/MenuBase', 'model/Metadata', 'model/RestApiArrayResultMetadata', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultMenu', 'model/RestApiResultMetadata', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MenuBase'), require('../model/Metadata'), require('../model/RestApiArrayResultMetadata'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultMenu'), require('../model/RestApiResultMetadata'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MenusApi = factory(root.Flipdish.ApiClient, root.Flipdish.MenuBase, root.Flipdish.Metadata, root.Flipdish.RestApiArrayResultMetadata, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiResultMenu, root.Flipdish.RestApiResultMetadata, root.Flipdish.RestApiStringResult, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, MenuBase, Metadata, RestApiArrayResultMetadata, RestApiErrorResult, RestApiForbiddenResult, RestApiResultMenu, RestApiResultMetadata, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * Menus service.
   * @module api/MenusApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MenusApi. 
   * @alias module:api/MenusApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteMenuItemMetadata operation.
     * @callback module:api/MenusApi~deleteMenuItemMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a menu item metadata by key
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} menuItemId Menu item identifier
     * @param {String} key Metadata key
     * @param {module:api/MenusApi~deleteMenuItemMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMenuItemMetadata = function(menuId, storeId, menuItemId, key, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuItemMetadata");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling deleteMenuItemMetadata");
      }

      // verify the required parameter 'menuItemId' is set
      if (menuItemId === undefined || menuItemId === null) {
        throw new Error("Missing the required parameter 'menuItemId' when calling deleteMenuItemMetadata");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteMenuItemMetadata");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'menuItemId': menuItemId,
        'key': key
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
        '/api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuItemMetadata_0 operation.
     * @callback module:api/MenusApi~deleteMenuItemMetadata_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a menu items metadata
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} menuItemId Menu item identifier
     * @param {String} key Metadata key
     * @param {module:api/MenusApi~deleteMenuItemMetadata_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMenuItemMetadata_0 = function(menuId, storeId, menuItemId, key, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuItemMetadata_0");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling deleteMenuItemMetadata_0");
      }

      // verify the required parameter 'menuItemId' is set
      if (menuItemId === undefined || menuItemId === null) {
        throw new Error("Missing the required parameter 'menuItemId' when calling deleteMenuItemMetadata_0");
      }

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteMenuItemMetadata_0");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'menuItemId': menuItemId,
        'key': key
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
        '/api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuSectionImage operation.
     * @callback module:api/MenusApi~deleteMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu image
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenusApi~deleteMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMenuSectionImage = function(menuId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuSectionImage");
      }


      var pathParams = {
        'menuId': menuId
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
        '/api/v1.0/menus/{menuId}/image', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuById operation.
     * @callback module:api/MenusApi~getMenuByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenu} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu by identifier
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenusApi~getMenuByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenu}
     */
    this.getMenuById = function(menuId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuById");
      }


      var pathParams = {
        'menuId': menuId
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
      var returnType = RestApiResultMenu;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuItemMetadata operation.
     * @callback module:api/MenusApi~getMenuItemMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a menu items metadata
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} menuItemId Menu item identifier
     * @param {module:api/MenusApi~getMenuItemMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultMetadata}
     */
    this.getMenuItemMetadata = function(menuId, storeId, menuItemId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuItemMetadata");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getMenuItemMetadata");
      }

      // verify the required parameter 'menuItemId' is set
      if (menuItemId === undefined || menuItemId === null) {
        throw new Error("Missing the required parameter 'menuItemId' when calling getMenuItemMetadata");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'menuItemId': menuItemId
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
      var returnType = RestApiArrayResultMetadata;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuItemOptionSetItemMetadata operation.
     * @callback module:api/MenusApi~getMenuItemOptionSetItemMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a menu item option set item metadata by key
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} optionSetItemId Menu item option set item identifier
     * @param {module:api/MenusApi~getMenuItemOptionSetItemMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMetadata}
     */
    this.getMenuItemOptionSetItemMetadata = function(menuId, storeId, optionSetItemId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuItemOptionSetItemMetadata");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getMenuItemOptionSetItemMetadata");
      }

      // verify the required parameter 'optionSetItemId' is set
      if (optionSetItemId === undefined || optionSetItemId === null) {
        throw new Error("Missing the required parameter 'optionSetItemId' when calling getMenuItemOptionSetItemMetadata");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'optionSetItemId': optionSetItemId
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
      var returnType = RestApiResultMetadata;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setMenuItemMetadata operation.
     * @callback module:api/MenusApi~setMenuItemMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a menu items metadata
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} menuItemId Menu item identifier
     * @param {module:model/Metadata} metadata Metadata object
     * @param {module:api/MenusApi~setMenuItemMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setMenuItemMetadata = function(menuId, storeId, menuItemId, metadata, callback) {
      var postBody = metadata;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling setMenuItemMetadata");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling setMenuItemMetadata");
      }

      // verify the required parameter 'menuItemId' is set
      if (menuItemId === undefined || menuItemId === null) {
        throw new Error("Missing the required parameter 'menuItemId' when calling setMenuItemMetadata");
      }

      // verify the required parameter 'metadata' is set
      if (metadata === undefined || metadata === null) {
        throw new Error("Missing the required parameter 'metadata' when calling setMenuItemMetadata");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'menuItemId': menuItemId
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
        '/api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setMenuItemOptionSetItemMetadata operation.
     * @callback module:api/MenusApi~setMenuItemOptionSetItemMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a menu item option set items metadata
     * @param {Number} menuId Menu identifier
     * @param {Number} storeId Store identifier
     * @param {Number} optionSetItemId Menu item option set item identifier
     * @param {module:model/Metadata} metadata Metadata object
     * @param {module:api/MenusApi~setMenuItemOptionSetItemMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setMenuItemOptionSetItemMetadata = function(menuId, storeId, optionSetItemId, metadata, callback) {
      var postBody = metadata;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling setMenuItemOptionSetItemMetadata");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling setMenuItemOptionSetItemMetadata");
      }

      // verify the required parameter 'optionSetItemId' is set
      if (optionSetItemId === undefined || optionSetItemId === null) {
        throw new Error("Missing the required parameter 'optionSetItemId' when calling setMenuItemOptionSetItemMetadata");
      }

      // verify the required parameter 'metadata' is set
      if (metadata === undefined || metadata === null) {
        throw new Error("Missing the required parameter 'metadata' when calling setMenuItemOptionSetItemMetadata");
      }


      var pathParams = {
        'menuId': menuId,
        'storeId': storeId,
        'optionSetItemId': optionSetItemId
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
        '/api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMenu operation.
     * @callback module:api/MenusApi~updateMenuCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update menu
     * @param {Number} menuId Menu identifier
     * @param {module:model/MenuBase} menu Menu (delta)
     * @param {module:api/MenusApi~updateMenuCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateMenu = function(menuId, menu, callback) {
      var postBody = menu;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling updateMenu");
      }

      // verify the required parameter 'menu' is set
      if (menu === undefined || menu === null) {
        throw new Error("Missing the required parameter 'menu' when calling updateMenu");
      }


      var pathParams = {
        'menuId': menuId
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
        '/api/v1.0/menus/{menuId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMenuSectionImage operation.
     * @callback module:api/MenusApi~uploadMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload menu image
     * @param {Number} menuId Menu identifier
     * @param {File} image Menu image
     * @param {module:api/MenusApi~uploadMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.uploadMenuSectionImage = function(menuId, image, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling uploadMenuSectionImage");
      }

      // verify the required parameter 'image' is set
      if (image === undefined || image === null) {
        throw new Error("Missing the required parameter 'image' when calling uploadMenuSectionImage");
      }


      var pathParams = {
        'menuId': menuId
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
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
