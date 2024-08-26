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
    instance = new Flipdish.ProductReference();
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

  describe('ProductReference', function() {
    it('should create an instance of ProductReference', function() {
      // uncomment below and update the code to test ProductReference
      //var instane = new Flipdish.ProductReference();
      //expect(instance).to.be.a(Flipdish.ProductReference);
    });

    it('should have the property Item (base name: "Item")', function() {
      // uncomment below and update the code to test the property Item
      //var instance = new Flipdish.ProductReference();
      //expect(instance).to.be();
    });

    it('should have the property Product (base name: "Product")', function() {
      // uncomment below and update the code to test the property Product
      //var instance = new Flipdish.ProductReference();
      //expect(instance).to.be();
    });

    it('should have the property CatalogItemId (base name: "CatalogItemId")', function() {
      // uncomment below and update the code to test the property CatalogItemId
      //var instance = new Flipdish.ProductReference();
      //expect(instance).to.be();
    });

    it('should have the property ProductType (base name: "ProductType")', function() {
      // uncomment below and update the code to test the property ProductType
      //var instance = new Flipdish.ProductReference();
      //expect(instance).to.be();
    });

    it('should have the property PreselectedQuantity (base name: "PreselectedQuantity")', function() {
      // uncomment below and update the code to test the property PreselectedQuantity
      //var instance = new Flipdish.ProductReference();
      //expect(instance).to.be();
    });

  });

}));
