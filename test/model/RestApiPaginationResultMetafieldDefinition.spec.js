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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RestApiPaginationResultMetafieldDefinition', function() {
    it('should create an instance of RestApiPaginationResultMetafieldDefinition', function() {
      // uncomment below and update the code to test RestApiPaginationResultMetafieldDefinition
      //var instane = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      //expect(instance).to.be.a(Flipdish.RestApiPaginationResultMetafieldDefinition);
    });

    it('should have the property Page (base name: "Page")', function() {
      // uncomment below and update the code to test the property Page
      //var instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property Limit (base name: "Limit")', function() {
      // uncomment below and update the code to test the property Limit
      //var instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property TotalRecordCount (base name: "TotalRecordCount")', function() {
      // uncomment below and update the code to test the property TotalRecordCount
      //var instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      //expect(instance).to.be();
    });

    it('should have the property Data (base name: "Data")', function() {
      // uncomment below and update the code to test the property Data
      //var instance = new Flipdish.RestApiPaginationResultMetafieldDefinition();
      //expect(instance).to.be();
    });

  });

}));
