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
    instance = new Flipdish.StoreOrderCapacityPeriod();
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

  describe('StoreOrderCapacityPeriod', function() {
    it('should create an instance of StoreOrderCapacityPeriod', function() {
      // uncomment below and update the code to test StoreOrderCapacityPeriod
      //var instane = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be.a(Flipdish.StoreOrderCapacityPeriod);
    });

    it('should have the property MaxOrderNumberPerStoreInterval (base name: "MaxOrderNumberPerStoreInterval")', function() {
      // uncomment below and update the code to test the property MaxOrderNumberPerStoreInterval
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property DayOfTheWeek (base name: "DayOfTheWeek")', function() {
      // uncomment below and update the code to test the property DayOfTheWeek
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property PeriodStartHour (base name: "PeriodStartHour")', function() {
      // uncomment below and update the code to test the property PeriodStartHour
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property PeriodStartMinutes (base name: "PeriodStartMinutes")', function() {
      // uncomment below and update the code to test the property PeriodStartMinutes
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property PeriodEndHour (base name: "PeriodEndHour")', function() {
      // uncomment below and update the code to test the property PeriodEndHour
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property PeriodEndMinutes (base name: "PeriodEndMinutes")', function() {
      // uncomment below and update the code to test the property PeriodEndMinutes
      //var instance = new Flipdish.StoreOrderCapacityPeriod();
      //expect(instance).to.be();
    });

  });

}));
