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
    define(['ApiClient', 'model/IndexPageBase', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultIndexPage', 'model/RestApiResultIndexPageBase', 'model/RestApiResultWebsiteImage', 'model/RestApiResultWebsiteTestimonial', 'model/RestApiUnauthorizedResult', 'model/WebsiteTestimonialBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IndexPageBase'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultIndexPage'), require('../model/RestApiResultIndexPageBase'), require('../model/RestApiResultWebsiteImage'), require('../model/RestApiResultWebsiteTestimonial'), require('../model/RestApiUnauthorizedResult'), require('../model/WebsiteTestimonialBase'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.WebsiteApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.IndexPageBase, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiResultIndexPage, root.FlipdishOpenApiV10.RestApiResultIndexPageBase, root.FlipdishOpenApiV10.RestApiResultWebsiteImage, root.FlipdishOpenApiV10.RestApiResultWebsiteTestimonial, root.FlipdishOpenApiV10.RestApiUnauthorizedResult, root.FlipdishOpenApiV10.WebsiteTestimonialBase);
  }
}(this, function(ApiClient, IndexPageBase, RestApiErrorResult, RestApiForbiddenResult, RestApiResultIndexPage, RestApiResultIndexPageBase, RestApiResultWebsiteImage, RestApiResultWebsiteTestimonial, RestApiUnauthorizedResult, WebsiteTestimonialBase) {
  'use strict';

  /**
   * Website service.
   * @module api/WebsiteApi
   * @version v1.0
   */

  /**
   * Constructs a new WebsiteApi. 
   * @alias module:api/WebsiteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addTestimonial operation.
     * @callback module:api/WebsiteApi~addTestimonialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultWebsiteTestimonial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a testimonial
     * @param {String} appId Application identifier
     * @param {module:model/WebsiteTestimonialBase} testimonial Testimonial to be added
     * @param {module:api/WebsiteApi~addTestimonialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultWebsiteTestimonial}
     */
    this.addTestimonial = function(appId, testimonial, callback) {
      var postBody = testimonial;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling addTestimonial");
      }

      // verify the required parameter 'testimonial' is set
      if (testimonial === undefined || testimonial === null) {
        throw new Error("Missing the required parameter 'testimonial' when calling addTestimonial");
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
      var returnType = RestApiResultWebsiteTestimonial;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/testimonial', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTestimonial operation.
     * @callback module:api/WebsiteApi~deleteTestimonialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a testimonial
     * @param {String} appId Application identifier
     * @param {Number} testimonialId Id of the testimonial to delete
     * @param {module:api/WebsiteApi~deleteTestimonialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTestimonial = function(appId, testimonialId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteTestimonial");
      }

      // verify the required parameter 'testimonialId' is set
      if (testimonialId === undefined || testimonialId === null) {
        throw new Error("Missing the required parameter 'testimonialId' when calling deleteTestimonial");
      }


      var pathParams = {
        'appId': appId,
        'testimonialId': testimonialId
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
        '/api/v1.0/{appId}/website/testimonial/{testimonialId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebsiteImage operation.
     * @callback module:api/WebsiteApi~deleteWebsiteImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Website Image
     * @param {String} appId Application identifier
     * @param {Number} imageId Id of the image
     * @param {module:api/WebsiteApi~deleteWebsiteImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebsiteImage = function(appId, imageId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteWebsiteImage");
      }

      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling deleteWebsiteImage");
      }


      var pathParams = {
        'appId': appId,
        'imageId': imageId
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
        '/api/v1.0/{appId}/website/image/{imageId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editTestimonial operation.
     * @callback module:api/WebsiteApi~editTestimonialCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultWebsiteTestimonial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a testimonial
     * @param {String} appId Application identifier
     * @param {Number} testimonialId Id of the testimonial to edit
     * @param {module:model/WebsiteTestimonialBase} testimonial New values of the testimonial
     * @param {module:api/WebsiteApi~editTestimonialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultWebsiteTestimonial}
     */
    this.editTestimonial = function(appId, testimonialId, testimonial, callback) {
      var postBody = testimonial;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling editTestimonial");
      }

      // verify the required parameter 'testimonialId' is set
      if (testimonialId === undefined || testimonialId === null) {
        throw new Error("Missing the required parameter 'testimonialId' when calling editTestimonial");
      }

      // verify the required parameter 'testimonial' is set
      if (testimonial === undefined || testimonial === null) {
        throw new Error("Missing the required parameter 'testimonial' when calling editTestimonial");
      }


      var pathParams = {
        'appId': appId,
        'testimonialId': testimonialId
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
      var returnType = RestApiResultWebsiteTestimonial;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/testimonial/{testimonialId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndexConfiguration operation.
     * @callback module:api/WebsiteApi~getIndexConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultIndexPage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Index Configuration
     * @param {String} appId Application identifier
     * @param {module:api/WebsiteApi~getIndexConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultIndexPage}
     */
    this.getIndexConfiguration = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getIndexConfiguration");
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
      var returnType = RestApiResultIndexPage;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/index', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setIndexConfiguration operation.
     * @callback module:api/WebsiteApi~setIndexConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultIndexPageBase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Index Configuration
     * @param {String} appId Application identifier
     * @param {module:model/IndexPageBase} indexPage New index page definition
     * @param {module:api/WebsiteApi~setIndexConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultIndexPageBase}
     */
    this.setIndexConfiguration = function(appId, indexPage, callback) {
      var postBody = indexPage;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setIndexConfiguration");
      }

      // verify the required parameter 'indexPage' is set
      if (indexPage === undefined || indexPage === null) {
        throw new Error("Missing the required parameter 'indexPage' when calling setIndexConfiguration");
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
      var returnType = RestApiResultIndexPageBase;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/index', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadWebsiteImage operation.
     * @callback module:api/WebsiteApi~uploadWebsiteImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultWebsiteImage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Website Image
     * @param {String} appId Application identifier
     * @param {module:model/String} imageLocation Section for which to upload the image
     * @param {File} image App Logo
     * @param {module:api/WebsiteApi~uploadWebsiteImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultWebsiteImage}
     */
    this.uploadWebsiteImage = function(appId, imageLocation, image, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling uploadWebsiteImage");
      }

      // verify the required parameter 'imageLocation' is set
      if (imageLocation === undefined || imageLocation === null) {
        throw new Error("Missing the required parameter 'imageLocation' when calling uploadWebsiteImage");
      }

      // verify the required parameter 'image' is set
      if (image === undefined || image === null) {
        throw new Error("Missing the required parameter 'image' when calling uploadWebsiteImage");
      }


      var pathParams = {
        'appId': appId,
        'imageLocation': imageLocation
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
      var returnType = RestApiResultWebsiteImage;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/image/{imageLocation}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the websiteCheckNow operation.
     * @callback module:api/WebsiteApi~websiteCheckNowCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Triggers a Check DNS Process
     * @param {String} appId 
     * @param {module:api/WebsiteApi~websiteCheckNowCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.websiteCheckNow = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling websiteCheckNow");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/website/dnscheck', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
