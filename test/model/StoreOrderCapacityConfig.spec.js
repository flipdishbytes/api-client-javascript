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
    instance = new Flipdish.StoreOrderCapacityConfig();
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

  describe('StoreOrderCapacityConfig', function() {
    it('should create an instance of StoreOrderCapacityConfig', function() {
      // uncomment below and update the code to test StoreOrderCapacityConfig
      //var instane = new Flipdish.StoreOrderCapacityConfig();
      //expect(instance).to.be.a(Flipdish.StoreOrderCapacityConfig);
    });

    it('should have the property StoreId (base name: "StoreId")', function() {
      // uncomment below and update the code to test the property StoreId
      //var instance = new Flipdish.StoreOrderCapacityConfig();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryType (base name: "DeliveryType")', function() {
      // uncomment below and update the code to test the property DeliveryType
      //var instance = new Flipdish.StoreOrderCapacityConfig();
      //expect(instance).to.be();
    });

    it('should have the property StoreIntervalInMinutes (base name: "StoreIntervalInMinutes")', function() {
      // uncomment below and update the code to test the property StoreIntervalInMinutes
      //var instance = new Flipdish.StoreOrderCapacityConfig();
      //expect(instance).to.be();
    });

    it('should have the property OrderCapacityPeriods (base name: "OrderCapacityPeriods")', function() {
      // uncomment below and update the code to test the property OrderCapacityPeriods
      //var instance = new Flipdish.StoreOrderCapacityConfig();
      //expect(instance).to.be();
    });

  });

}));
