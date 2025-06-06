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
    instance = new Flipdish.CreateFullMenuSection();
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

  describe('CreateFullMenuSection', function() {
    it('should create an instance of CreateFullMenuSection', function() {
      // uncomment below and update the code to test CreateFullMenuSection
      //var instane = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be.a(Flipdish.CreateFullMenuSection);
    });

    it('should have the property MenuSectionAvailability (base name: "MenuSectionAvailability")', function() {
      // uncomment below and update the code to test the property MenuSectionAvailability
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property MenuItems (base name: "MenuItems")', function() {
      // uncomment below and update the code to test the property MenuItems
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property Name (base name: "Name")', function() {
      // uncomment below and update the code to test the property Name
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property Description (base name: "Description")', function() {
      // uncomment below and update the code to test the property Description
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property DisplayOrder (base name: "DisplayOrder")', function() {
      // uncomment below and update the code to test the property DisplayOrder
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property IsAvailable (base name: "IsAvailable")', function() {
      // uncomment below and update the code to test the property IsAvailable
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property IsHiddenFromCustomers (base name: "IsHiddenFromCustomers")', function() {
      // uncomment below and update the code to test the property IsHiddenFromCustomers
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property ImageUrl (base name: "ImageUrl")', function() {
      // uncomment below and update the code to test the property ImageUrl
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property MenuSectionId (base name: "MenuSectionId")', function() {
      // uncomment below and update the code to test the property MenuSectionId
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

    it('should have the property PublicId (base name: "PublicId")', function() {
      // uncomment below and update the code to test the property PublicId
      //var instance = new Flipdish.CreateFullMenuSection();
      //expect(instance).to.be();
    });

  });

}));
