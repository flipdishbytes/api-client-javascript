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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.MenuItemOptionSet();
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

  describe('MenuItemOptionSet', function() {
    it('should create an instance of MenuItemOptionSet', function() {
      // uncomment below and update the code to test MenuItemOptionSet
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be.a(Flipdish.MenuItemOptionSet);
    });

    it('should have the property menuItemOptionSetId (base name: "MenuItemOptionSetId")', function() {
      // uncomment below and update the code to test the property menuItemOptionSetId
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "ImageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property menuItemOptionSetItems (base name: "MenuItemOptionSetItems")', function() {
      // uncomment below and update the code to test the property menuItemOptionSetItems
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property isMasterOptionSet (base name: "IsMasterOptionSet")', function() {
      // uncomment below and update the code to test the property isMasterOptionSet
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property displayOrder (base name: "DisplayOrder")', function() {
      // uncomment below and update the code to test the property displayOrder
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property minSelectCount (base name: "MinSelectCount")', function() {
      // uncomment below and update the code to test the property minSelectCount
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property maxSelectCount (base name: "MaxSelectCount")', function() {
      // uncomment below and update the code to test the property maxSelectCount
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

    it('should have the property cellLayoutType (base name: "CellLayoutType")', function() {
      // uncomment below and update the code to test the property cellLayoutType
      //var instane = new Flipdish.MenuItemOptionSet();
      //expect(instance).to.be();
    });

  });

}));
