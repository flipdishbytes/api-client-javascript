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
    instance = new Flipdish.UpdateGroup();
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

  describe('UpdateGroup', function() {
    it('should create an instance of UpdateGroup', function() {
      // uncomment below and update the code to test UpdateGroup
      //var instane = new Flipdish.UpdateGroup();
      //expect(instance).to.be.a(Flipdish.UpdateGroup);
    });

    it('should have the property Sku (base name: "Sku")', function() {
      // uncomment below and update the code to test the property Sku
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property AutogenerateDisplayText (base name: "AutogenerateDisplayText")', function() {
      // uncomment below and update the code to test the property AutogenerateDisplayText
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property ImageFileName (base name: "ImageFileName")', function() {
      // uncomment below and update the code to test the property ImageFileName
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property MinSelectCount (base name: "MinSelectCount")', function() {
      // uncomment below and update the code to test the property MinSelectCount
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property MaxSelectCount (base name: "MaxSelectCount")', function() {
      // uncomment below and update the code to test the property MaxSelectCount
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property Products (base name: "Products")', function() {
      // uncomment below and update the code to test the property Products
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

    it('should have the property Metafields (base name: "Metafields")', function() {
      // uncomment below and update the code to test the property Metafields
      //var instance = new Flipdish.UpdateGroup();
      //expect(instance).to.be();
    });

  });

}));
