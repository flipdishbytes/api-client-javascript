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
    instance = new Flipdish.StuartSettingsTransportPrices();
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

  describe('StuartSettingsTransportPrices', function() {
    it('should create an instance of StuartSettingsTransportPrices', function() {
      // uncomment below and update the code to test StuartSettingsTransportPrices
      //var instane = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be.a(Flipdish.StuartSettingsTransportPrices);
    });

    it('should have the property Bike (base name: "Bike")', function() {
      // uncomment below and update the code to test the property Bike
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Cargobike (base name: "Cargobike")', function() {
      // uncomment below and update the code to test the property Cargobike
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Cargobikexl (base name: "Cargobikexl")', function() {
      // uncomment below and update the code to test the property Cargobikexl
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Motorbike (base name: "Motorbike")', function() {
      // uncomment below and update the code to test the property Motorbike
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Motorbikexl (base name: "Motorbikexl")', function() {
      // uncomment below and update the code to test the property Motorbikexl
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Car (base name: "Car")', function() {
      // uncomment below and update the code to test the property Car
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

    it('should have the property Van (base name: "Van")', function() {
      // uncomment below and update the code to test the property Van
      //var instance = new Flipdish.StuartSettingsTransportPrices();
      //expect(instance).to.be();
    });

  });

}));
