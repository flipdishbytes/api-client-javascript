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
    instance = new Flipdish.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instane = new Flipdish.Product();
      //expect(instance).to.be.a(Flipdish.Product);
    });

    it('should have the property CatalogItemId (base name: "CatalogItemId")', function() {
      // uncomment below and update the code to test the property CatalogItemId
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property IsArchived (base name: "IsArchived")', function() {
      // uncomment below and update the code to test the property IsArchived
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Groups (base name: "Groups")', function() {
      // uncomment below and update the code to test the property Groups
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Metafields (base name: "Metafields")', function() {
      // uncomment below and update the code to test the property Metafields
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property ProductType (base name: "ProductType")', function() {
      // uncomment below and update the code to test the property ProductType
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Sku (base name: "Sku")', function() {
      // uncomment below and update the code to test the property Sku
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Description (base name: "Description")', function() {
      // uncomment below and update the code to test the property Description
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Price (base name: "Price")', function() {
      // uncomment below and update the code to test the property Price
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property ImageFileName (base name: "ImageFileName")', function() {
      // uncomment below and update the code to test the property ImageFileName
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

    it('should have the property Alcohol (base name: "Alcohol")', function() {
      // uncomment below and update the code to test the property Alcohol
      //var instance = new Flipdish.Product();
      //expect(instance).to.be();
    });

  });

}));
