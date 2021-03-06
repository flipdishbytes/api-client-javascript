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
    instance = new Flipdish.OrderItemOption();
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

  describe('OrderItemOption', function() {
    it('should create an instance of OrderItemOption', function() {
      // uncomment below and update the code to test OrderItemOption
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be.a(Flipdish.OrderItemOption);
    });

    it('should have the property metadata (base name: "Metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property menuItemOptionId (base name: "MenuItemOptionId")', function() {
      // uncomment below and update the code to test the property menuItemOptionId
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property isMasterOptionSetItem (base name: "IsMasterOptionSetItem")', function() {
      // uncomment below and update the code to test the property isMasterOptionSetItem
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "Price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property menuItemOptionDisplayOrder (base name: "MenuItemOptionDisplayOrder")', function() {
      // uncomment below and update the code to test the property menuItemOptionDisplayOrder
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

    it('should have the property menuItemOptionSetDisplayOrder (base name: "MenuItemOptionSetDisplayOrder")', function() {
      // uncomment below and update the code to test the property menuItemOptionSetDisplayOrder
      //var instane = new Flipdish.OrderItemOption();
      //expect(instance).to.be();
    });

  });

}));
