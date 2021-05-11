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
    define(['ApiClient', 'model/BusinessHoursPeriodBase', 'model/MenuObjectDisplayOrders', 'model/MenuSectionAvailabilityBase', 'model/MenuSectionBase', 'model/RestApiArrayResultMenuSection', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultBusinessHoursPeriod', 'model/RestApiResultMenuSection', 'model/RestApiResultMenuSectionAvailability', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BusinessHoursPeriodBase'), require('../model/MenuObjectDisplayOrders'), require('../model/MenuSectionAvailabilityBase'), require('../model/MenuSectionBase'), require('../model/RestApiArrayResultMenuSection'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultBusinessHoursPeriod'), require('../model/RestApiResultMenuSection'), require('../model/RestApiResultMenuSectionAvailability'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MenuSectionsApi = factory(root.Flipdish.ApiClient, root.Flipdish.BusinessHoursPeriodBase, root.Flipdish.MenuObjectDisplayOrders, root.Flipdish.MenuSectionAvailabilityBase, root.Flipdish.MenuSectionBase, root.Flipdish.RestApiArrayResultMenuSection, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiResultBusinessHoursPeriod, root.Flipdish.RestApiResultMenuSection, root.Flipdish.RestApiResultMenuSectionAvailability, root.Flipdish.RestApiStringResult, root.Flipdish.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, BusinessHoursPeriodBase, MenuObjectDisplayOrders, MenuSectionAvailabilityBase, MenuSectionBase, RestApiArrayResultMenuSection, RestApiErrorResult, RestApiForbiddenResult, RestApiResultBusinessHoursPeriod, RestApiResultMenuSection, RestApiResultMenuSectionAvailability, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * MenuSections service.
   * @module api/MenuSectionsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MenuSectionsApi. 
   * @alias module:api/MenuSectionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cloneMenuSection operation.
     * @callback module:api/MenuSectionsApi~cloneMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~cloneMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuSection}
     */
    this.cloneMenuSection = function(menuId, menuSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling cloneMenuSection");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling cloneMenuSection");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
      var returnType = RestApiResultMenuSection;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/clone', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuAvailabilityForDay operation.
     * @callback module:api/MenuSectionsApi~createMenuAvailabilityForDayCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set/update menu section availability hours.
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/String} dayOfWeek Day of the  week
     * @param {module:model/BusinessHoursPeriodBase} businessHoursPeriod Menu section active hours, note: DayOfWeek property will be overriden by the path parameter.
     * @param {module:api/MenuSectionsApi~createMenuAvailabilityForDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createMenuAvailabilityForDay = function(menuId, menuSectionId, dayOfWeek, businessHoursPeriod, callback) {
      var postBody = businessHoursPeriod;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuAvailabilityForDay");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling createMenuAvailabilityForDay");
      }

      // verify the required parameter 'dayOfWeek' is set
      if (dayOfWeek === undefined || dayOfWeek === null) {
        throw new Error("Missing the required parameter 'dayOfWeek' when calling createMenuAvailabilityForDay");
      }

      // verify the required parameter 'businessHoursPeriod' is set
      if (businessHoursPeriod === undefined || businessHoursPeriod === null) {
        throw new Error("Missing the required parameter 'businessHoursPeriod' when calling createMenuAvailabilityForDay");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'dayOfWeek': dayOfWeek
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability/times/{dayOfWeek}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuSection operation.
     * @callback module:api/MenuSectionsApi~createMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create menu section
     * @param {Number} menuId Menu identifier
     * @param {module:model/MenuSectionBase} menuSection Menu section
     * @param {module:api/MenuSectionsApi~createMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createMenuSection = function(menuId, menuSection, callback) {
      var postBody = menuSection;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuSection");
      }

      // verify the required parameter 'menuSection' is set
      if (menuSection === undefined || menuSection === null) {
        throw new Error("Missing the required parameter 'menuSection' when calling createMenuSection");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuSectionAvailability operation.
     * @callback module:api/MenuSectionsApi~createMenuSectionAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create menu availability type
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuSectionAvailabilityBase} menuSectionAvailability DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes
     * @param {module:api/MenuSectionsApi~createMenuSectionAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createMenuSectionAvailability = function(menuId, menuSectionId, menuSectionAvailability, callback) {
      var postBody = menuSectionAvailability;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuSectionAvailability");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling createMenuSectionAvailability");
      }

      // verify the required parameter 'menuSectionAvailability' is set
      if (menuSectionAvailability === undefined || menuSectionAvailability === null) {
        throw new Error("Missing the required parameter 'menuSectionAvailability' when calling createMenuSectionAvailability");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuSection operation.
     * @callback module:api/MenuSectionsApi~deleteMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~deleteMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMenuSection = function(menuId, menuSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuSection");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling deleteMenuSection");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuSectionImage operation.
     * @callback module:api/MenuSectionsApi~deleteMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu section image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~deleteMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMenuSectionImage = function(menuId, menuSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuSectionImage");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling deleteMenuSectionImage");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/image', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuSectionById operation.
     * @callback module:api/MenuSectionsApi~getMenuSectionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu section by identifier
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~getMenuSectionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuSection}
     */
    this.getMenuSectionById = function(menuId, menuSectionId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuSectionById");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling getMenuSectionById");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
      var returnType = RestApiResultMenuSection;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuSections operation.
     * @callback module:api/MenuSectionsApi~getMenuSectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu sections
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenuSectionsApi~getMenuSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultMenuSection}
     */
    this.getMenuSections = function(menuId, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuSections");
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
      var returnType = RestApiArrayResultMenuSection;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the menuSectionsSetItemDisplayOrders operation.
     * @callback module:api/MenuSectionsApi~menuSectionsSetItemDisplayOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Re-arrange Items within a Section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuObjectDisplayOrders} displayOrders Item Ids and their new display order
     * @param {module:api/MenuSectionsApi~menuSectionsSetItemDisplayOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.menuSectionsSetItemDisplayOrders = function(menuId, menuSectionId, displayOrders, callback) {
      var postBody = displayOrders;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling menuSectionsSetItemDisplayOrders");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling menuSectionsSetItemDisplayOrders");
      }

      // verify the required parameter 'displayOrders' is set
      if (displayOrders === undefined || displayOrders === null) {
        throw new Error("Missing the required parameter 'displayOrders' when calling menuSectionsSetItemDisplayOrders");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitemdisplayorders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMenuSection operation.
     * @callback module:api/MenuSectionsApi~updateMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuSectionBase} menuSection Menu section changes (delta)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.undoAfter An optional time period, in hours, after which the hide-section operation will be undone.
     * @param {module:api/MenuSectionsApi~updateMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateMenuSection = function(menuId, menuSectionId, menuSection, opts, callback) {
      opts = opts || {};
      var postBody = menuSection;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling updateMenuSection");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling updateMenuSection");
      }

      // verify the required parameter 'menuSection' is set
      if (menuSection === undefined || menuSection === null) {
        throw new Error("Missing the required parameter 'menuSection' when calling updateMenuSection");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
      };
      var queryParams = {
        'undoAfter': opts['undoAfter'],
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMenuSectionImage operation.
     * @callback module:api/MenuSectionsApi~uploadMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload menu section image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {File} Image Menu section image
     * @param {module:api/MenuSectionsApi~uploadMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.uploadMenuSectionImage = function(menuId, menuSectionId, Image, callback) {
      var postBody = null;

      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling uploadMenuSectionImage");
      }

      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling uploadMenuSectionImage");
      }

      // verify the required parameter 'Image' is set
      if (Image === undefined || Image === null) {
        throw new Error("Missing the required parameter 'Image' when calling uploadMenuSectionImage");
      }


      var pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'Image': Image
      };

      var authNames = ['oauth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
